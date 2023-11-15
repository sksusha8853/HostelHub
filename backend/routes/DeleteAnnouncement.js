const express = require('express')
const router = express.Router()
const Announcement = require('../models/Announcement');

router.post("/deleteannouncement",
    async (req, res) => {

        try {
            const announcementId = req.body.announcementId;
            const userId = req.user.userId;
            const userRole = req.user.userRole;
            const announcement = await Announcement.findOne({ _id: announcementId });
            if ((announcement.staff == userId) || (userRole == "admin")) {
                await announcement.deleteOne();
            } else {
                return res.status(401).json({ success: false, msg: "User not allowed" });
            }
            return res.status(200).json({ success: true, msg: "Announcement deleted successfully!" });

        } catch (err) {
            console.log(err)
            return res.status(500).json({ success: false })
        }
    })

module.exports = router;