const express = require('express')
const router = express.Router()
const Staff = require('../models/Staff')
const Student = require('../models/Student')
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const jwtSecret = process.env.JWT_SECRET

router.post("/login", async (req, res) => {
    try {
        console.log('req', req)
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let email = req.body.email;
        let userData;
        let studentData = await Student.findOne({ email });
        if (studentData) {
            const pwdCompare = await bcrypt.compare(req.body.password, studentData.password);
            if (!pwdCompare) {
                return res.status(400).json({ errors: "Please enter correct credentials" })
            }
            else {
                userData = studentData;
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
                    userData = staffData;
                }
            }
            else {
                return res.status(400).json({ errors: "Please enter correct credentials" })
            }
        }
        // const authToken = jwt.sign(data, jwtSecret)
        // console.log('authToken', authToken)
        return res.json({ success: true, authToken: userData })
    } catch (error) {
        console.log(error)
        res.json({ success: false });
    }
})

module.exports = router;