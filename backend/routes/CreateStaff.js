const express = require('express')
const router = express.Router()
const Staff = require('../models/Staff')
const { body, validationResult } = require('express-validator');
router.post("/createstaff", [
    body('email').isEmail(),
    body('password', 'Password cannot be less than 8 characters.').isLength({ min: 8 }),
    body('gender', 'Please choose your gender.').isLength({ min: 1 }),
    body('address', 'Please fill your address').isLength({ min: 1 }),
    body('contactNumber', 'Please fill your contact number.').isLength({ min: 1 })
],
    async (req, res) => {
        try {
            await Staff.create({
                email: req.body.email,
                password: req.body.password,
                name: req.body.name,
                gender: req.body.gender,
                role: req.body.role,
                address: req.body.address,
                contactNumber: req.body.contactNumber,
            })
            return res.json({ success: true });
        } catch (err) {
            console.log(err)
            return res.json({ success: false })
        }
    })

module.exports = router;