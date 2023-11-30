const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const Student = require('../models/Student');
const Staff = require('../models/Staff');
const Complaint = require('../models/Complaint');
const auth = require("../middleware/auth");

router.get("/getAllComplaints", auth,
    async (req, res) => {

        try {
            const { userId, role } = req.user;
            let complaints;

            if (role == "admin") {
                complaints = await Complaint.find();
            } else if (role == "staff") {
                complaints = await Complaint.find();
            } else if (role == "student") {
                complaints = await Complaint.find({ student: userId });
            }
            return res.json({ success: true, complaints: complaints });

        } catch (err) {
            console.log(err)
            return res.json({ success: false })
        }
    })

module.exports = router;