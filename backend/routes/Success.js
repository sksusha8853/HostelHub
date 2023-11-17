const express = require('express')
const router = express.Router()
const jwt = require("jsonwebtoken");

router.get("/success",
    async (req, res) => {
        const user = req.user;
        const authToken = jwt.sign(
            {
                userId: user._id,
                email: user.email,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "72h",
            }
        );

        return res.redirect("http://localhost:3000/?user=" + authToken);
    }
)

module.exports = router;

