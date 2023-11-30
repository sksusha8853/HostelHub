const express = require('express')
const router = express.Router()
const Suggestion = require('../models/Suggestion')
const { body, validationResult } = require('express-validator');
const Student = require('../models/Student');
const auth = require("../middleware/auth");

router.post("/createsuggestion", auth, [
    body('description', 'Description can\'t be empty.').isLength({ min: 1 }),
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const email = req.user.email;
            const student = await Student.findOne({ email });
            await Suggestion.create({
                student: student,
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