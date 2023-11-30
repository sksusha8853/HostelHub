const express = require('express')
const router = express.Router()
const Staff = require('../models/Staff')
const Student = require('../models/Student')
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

router.post("/login", async (req, res) => {
    try {
        console.log(req);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let email = req.body.email;
        let studentData = await Student.findOne({ email });
        if (studentData) {
            const pwdCompare = await bcrypt.compare(req.body.password, studentData.password);
            if (!pwdCompare) {
                return res.status(400).json({ errors: "Please enter correct credentials" })
            }
            else {
                const token = jwt.sign(
                    {
                        userId: studentData._id,
                        email: studentData.email,
                        role: "student",
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: "72h",
                    }
                );
                console.log('token', token)
                return res.json({ success: true, role: "student", authToken: token })
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
                    const token = jwt.sign(
                        {
                            userId: staffData._id,
                            email: staffData.email,
                            role: "staff",
                        },
                        process.env.JWT_SECRET,
                        {
                            expiresIn: "72h",
                        }
                    );
                    return res.json({ success: true, role: "staff", authToken: token })
                }
            }
            else {
                return res.status(400).json({ errors: "Please enter correct credentials" })
            }
        }

    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong. Please try again");
    }
})

module.exports = router;