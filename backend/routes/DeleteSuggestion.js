const express = require('express')
const router = express.Router()
const Suggestion = require('../models/Suggestion');
const auth = require("../middleware/auth");

router.post("/deleteSuggestion",auth,
    async (req, res) => {
        try {
            console.log('req.user.userId', req.user.userId)
            const suggestionId = req.body.suggestionId;
            const userId = req.user.userId;
            const userRole = req.user.role;
            console.log('suggestionId', suggestionId)
            console.log('userId', userId)
            console.log('userRole', userRole)

            const suggestion = await Suggestion.findOne({ _id: suggestionId });
            console.log('suggestion', suggestion)
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