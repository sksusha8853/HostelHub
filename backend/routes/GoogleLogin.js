const express = require('express')
const router = express.Router()
const passport = require("passport");

router.get("/google", passport.authenticate("google", {
    scope: ["email", "profile"],
}))

module.exports = router;