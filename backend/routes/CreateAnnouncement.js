const express = require('express')
const router = express.Router()
const Announcement = require('../models/Announcement')
const { body, validationResult } = require('express-validator');
const Staff = require('../models/Staff');
const auth = require("../middleware/auth");
router.post("/createannouncement", auth, [
    body('description', 'Description can\'t be empty.').isLength({ min: 1 }),
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const userId = req.body.userId;
            const staff = await Staff.findOne({ _id: userId });
            await Announcement.create({
                staff: staff,
                subject: req.body.subject,
                description: req.body.description,
            })
            return res.status(200).json({ success: true, msg:"Announcement Created Successfully." });
        } catch (err) {
            console.log(err)
            return res.status(400).json({ success: false, mgs:err })
        }
    })

module.exports = router;