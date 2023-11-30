const express = require('express')
const router = express.Router()
const Complaint = require('../models/Complaint');
const auth = require("../middleware/auth");

router.post("/deleteComplaint", auth,
    async (req, res) => {
        try {
            const complaintId = req.body.complaintId;
            const userId = req.user.userId;
            const userRole = req.user.role;

            const complaint = await Complaint.findOne({ _id: complaintId });
            console.log('complaint', complaint)
            if ((complaint.student == userId) || (userRole == "admin")) {
                await complaint.deleteOne();
            } else {
                return res.status(404).json({ success: false, msg: "User not allowed" });
            }
            return res.json({ success: true, msg: "Complaint deleted successfully!" });

        } catch (err) {
            console.log(err)
            return res.status(500).json({ success: false })
        }
    })

module.exports = router;