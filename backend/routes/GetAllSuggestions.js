const express = require('express')
const router = express.Router()
const Suggestion = require('../models/Suggestion');
const { body, validationResult } = require('express-validator');
const Student = require('../models/Student');
const Staff = require('../models/Staff');

router.get("/getAllSuggestions",
    async (req, res) => {

        try {
            const { email, role } = req.body;
            let suggestions;

            if (role == "admin") {
                suggestions = await Suggestion.find();
            } else {
                suggestions = await Suggestion.find({ email: email });
            }
            return res.json({ success: true, suggestions: suggestions });

        } catch (err) {
            console.log(err)
            return res.json({ success: false })
        }
    })

module.exports = router;