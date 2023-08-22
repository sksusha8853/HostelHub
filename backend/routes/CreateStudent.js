const express = require('express')
const router = express.Router()
const Student = require('../models/Student')

router.post("/createstudent", async (req, res) => {
    try {
        await Student.create({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            gender: req.body.gender,
            address: req.body.address,
            contactNumber: req.body.contactNumber,
            hostel: req.body.hostel,
            flatNumber: req.body.flatNumber,
            roomNumber: req.body.roomNumber
        })
        return res.json({success : true});
    } catch (err) {
        console.log(err)
        return res.json({success : false})
    }
})

module.exports = router;