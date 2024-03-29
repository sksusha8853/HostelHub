const express = require('express')
const router = express.Router()
const Student = require('../models/Student')
const { body, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs");
const auth = require("../middleware/auth");

router.post("/createstudent", auth, [
    body('email').isEmail(),
    body('password', 'Password cannot be less than 8 characters.').isLength({ min: 8 }),
    body('gender', 'Please choose your gender.').isLength({ min: 1 }),
    body('address', 'Please fill your address').isLength({ min: 1 }),
    body('contactNumber', 'Please fill your contact number.').isLength({ min: 1 })
]
    , async (req, res) => {
        const errors = validationResult(req);
        console.log('errors', errors)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(11);
        let secPassword = await bcrypt.hash(req.body.password, salt)
        try {
            await Student.create({
                email: req.body.email,
                password: secPassword,
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