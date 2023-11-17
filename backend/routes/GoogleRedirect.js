const express = require('express')
const router = express.Router()
const passport = require("passport");

router.get("/googleRedirect", passport.authenticate("google", {
    failureRedirect: "/failed",
    successRedirect: "/api/success",
}))

module.exports = router;
