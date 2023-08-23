const express = require('express')
const router = express.Router()
const Student = require('../models/Student')
const { body, validationResult } = require('express-validator');
router.post("/createstudent", [
    body('email').isEmail(),
    body('password', 'Password cannot be less than 8 characters.').isLength({ min: 8 }),
    body('gender', 'Please choose your gender.').isLength({ min: 1 }),
    body('address', 'Please fill your address').isLength({ min: 1 }),
    body('contactNumber', 'Please fill your contact number.').isLength({ min: 1 })
]
    , async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            await Student.create({
                email: req.body.email,
                password: req.body.password,
                name: req.body.name,
                gender: req.body.gender,
                address: req.body.address,
                contactNumber: req.body.contactNumber,
                hostel: req.body.hostel,
                flatNumber: req.body.flatNumber,
                roomNumber: req.body.roomNumber
            }).then(res.json({ success: true }))
        } catch (err) {
            console.log(err)
            res.json({ success: false })
        }
    })

module.exports = router;