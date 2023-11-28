const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');


router.get("/isLoggedIn",
    async (req, res) => {

        try {
            jwt.verify(req.body.userDetails, process.env.JWT_SECRET, (err, decoded) => {
                if (err) {
                    return res.json({ success: false });
                } else {
                    return res.json({ success: true, userDetails: decoded });
                }
            });

        } catch (err) {
            console.log(err)
            return res.json({ success: false })
        }
    })

module.exports = router;