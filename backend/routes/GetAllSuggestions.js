const express = require('express')
const router = express.Router()
const Suggestion = require('../models/Suggestion');
const { body, validationResult } = require('express-validator');
const Student = require('../models/Student');
const Staff = require('../models/Staff');
const auth = require("../middleware/auth");

router.get("/getAllSuggestions", auth,
    async (req, res) => {

        try {
            const { userId, role } = req.user;
            let suggestions;

            if (role == "admin") {
                suggestions = await Suggestion.find();
            } else if (role == "staff") {
                suggestions = await Suggestion.find();
            } else {
                suggestions = await Suggestion.find({ student: userId });
            }
            return res.json({ success: true, suggestions: suggestions });

        } catch (err) {
            console.log(err)
            return res.json({ success: false })
        }
    })

module.exports = router;