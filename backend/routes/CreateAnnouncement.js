const express = require('express')
const router = express.Router()
const Announcement = require('../models/Announcement')
const { body, validationResult } = require('express-validator');
const Staff = require('../models/Staff');

router.post("/createannouncement", [
    body('subject', 'Subject can\'t be empty.').isLength({ min: 1 }),
    body('description', 'Description can\'t be empty.').isLength({ min: 1 }),
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const email = req.body.email;
            const staff = await Staff.findOne({ email });
            await Announcement.create({
                staff: staff,
                subject: req.body.subject,
                description: req.body.description,
            })
            return res.json({ success: true });
        } catch (err) {
            console.log(err)
            return res.json({ success: false })
        }
    })

module.exports = router;