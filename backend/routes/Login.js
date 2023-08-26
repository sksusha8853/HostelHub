const express = require('express')
const router = express.Router()
const Staff = require('../models/Staff')
const Student = require('../models/Student')
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const jwtSecret = process.env.JWT_SECRET

router.post("/login", [
    body('email').isEmail()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
        let userId;
        let studentData = await Student.findOne({ email });
        if (studentData) {
            const pwdCompare = await bcrypt.compare(req.body.password, studentData.password);
            if (!pwdCompare) {
                return res.status(400).json({ errors: "Please enter correct credentials" })
            }
            else {
                userId = studentData.id;
            }
        }
        else {
            let staffData = await Staff.findOne({ email });
            if (staffData) {
                const pwdCompare = await bcrypt.compare(req.body.password, staffData.password);
                if (!pwdCompare) {
                    return res.status(400).json({ errors: "Please enter correct credentials" })
                }
                else {
                    userId = studentData.id;
                }
            }
            else {
                return res.status(400).json({ errors: "Please enter correct credentials" })
            }
        }
        const data = {
            user: {
                id: userId
            }
        }

        const authToken = jwt.sign(data, jwtSecret)
        return res.json({ success: true, authToken:authToken})
    } catch (error) {
        console.log(error)
        res.json({ success: false });
    }
})

module.exports = router;