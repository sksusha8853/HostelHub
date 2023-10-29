const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const Announcement = require('../models/Announcement');

router.get("/getAllAnnouncements", 
    async (req, res) => {

        try {
            let announcements = await Announcement.find().sort({ timestamp: 1 });   
            return res.json({ success: true, announcements:announcements });
            
        } catch (err) {
            console.log(err);
            return res.json({ success: false });
        }
    })

module.exports = router;