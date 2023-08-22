const mongoose = require('mongoose')

const { Schema } = mongoose

const StudentSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    contactNumber:{
        type: String,
        required: true
    },
    hostel:{
        type: String,
        default: "NA"
    },
    flatNumber:{
        type: String,
        default: "NA"
    },
    roomNumber:{
        type: String,
        default: "NA"
    }
});

module.exports = mongoose.model('student', StudentSchema);