const express = require('express')
const router = express.Router()
const Staff = require('../models/Staff')

router.post("/createstaff", async (req, res) => {
    try {
        await Staff.create({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            gender: req.body.gender,
            role: req.body.role,
            address: req.body.address,
            contactNumber: req.body.contactNumber,
        })
        return res.json({success : true});
    } catch (err) {
        console.log(err)
        return res.json({success : false})
    }
})

module.exports = router;