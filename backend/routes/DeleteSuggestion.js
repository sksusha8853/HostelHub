const express = require('express')
const router = express.Router()
const Suggestion = require('../models/Suggestion');

router.post("/deleteSuggestion",
    async (req, res) => {

        try {
            const suggestionId = req.body.suggestionId;
            const userId = req.body.userId;
            const userRole = req.user.userRole;
            const suggestion = await Suggestion.findOne({ _id: suggestionId });
            if ((suggestion.student == userId) || (userRole == "admin")) {
                await suggestion.deleteOne();
            } else {
                return res.status(401).json({ success: false, msg: "User not allowed" });
            }
            return res.status(200).json({ success: true, msg: "Suggestion deleted successfully!" });

        } catch (err) {
            console.log(err)
            return res.status(500).json({ success: false })
        }
    })

module.exports = router;