const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const Student = require('../models/Student');
const Staff = require('../models/Staff');
const Complaint = require('../models/Complaint');

router.get("/getAllComplaints", 
    async (req, res) => {

        try {
            const {email,role} = req.body;
            let complaints;
            
            if(role=="admin"){
                complaints = await Complaint.find();   
            }else {
                complaints = await Complaint.find({email:email});
            }
            return res.json({ success: true, complaints:complaints });
            
        } catch (err) {
            console.log(err)
            return res.json({ success: false })
        }
    })

module.exports = router;