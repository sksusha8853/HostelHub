const express = require('express')
const router = express.Router()
const Staff = require('../models/Staff')
const Student = require('../models/Student')
const { body, validationResult } = require('express-validator');

router.post("/login", [
    body('email').isEmail()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
        let studentData = await Student.findOne({ email });
        if (studentData) {
            if (req.body.password != studentData.password) {
                return res.status(400).json({ errors: "Please enter correct credentials" })
            }
            else {
                return res.json({ success: true })
            }
        }
        else {
            let staffData = await Staff.findOne({ email });
            if (staffData) {
                if (req.body.password != staffData.password) {
                    return res.status(400).json({ errors: "Please enter correct credentials" })
                }
                else {
                    return res.json({ success: true });
                }
            }
            else {
                return res.status(400).json({ errors: "Please enter correct credentials" })
            }
        }
    } catch (error) {
        console.log(error)
        res.json({ success: false });
    }
})

module.exports = router;