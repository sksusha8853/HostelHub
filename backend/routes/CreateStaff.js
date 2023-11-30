const express = require('express')
const router = express.Router()
const Staff = require('../models/Staff')
const { body, validationResult } = require('express-validator');
const auth = require("../middleware/auth");

const bcrypt = require("bcryptjs");

router.post("/createstaff", auth, [
    body('email').isEmail(),
    body('password', 'Password cannot be less than 8 characters.').isLength({ min: 8 }),
    body('gender', 'Please choose your gender.').isLength({ min: 1 }),
    body('address', 'Please fill your address').isLength({ min: 1 }),
    body('contactNumber', 'Please fill your contact number.').isLength({ min: 1 })
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const salt = await bcrypt.genSalt(11);
            let secPassword = await bcrypt.hash(req.body.password, salt)
            await Staff.create({
                email: req.body.email,
                password: secPassword,
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