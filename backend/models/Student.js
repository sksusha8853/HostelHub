const mongoose = require('mongoose')

const { Schema } = mongoose

const StudentSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
    },
    googleId: {
        type: String,
    },
    facebookId: {
        type: String,
    },
    gender: {
        type: String,
    },
    address: {
        type: String,
    },
    contactNumber: {
        type: String,
    },
    role: {
        type: String,
        default: "student"
    },
    hostel: {
        type: String,
        default: "NA"
    },
    flatNumber: {
        type: String,
        default: "NA"
    },
    roomNumber: {
        type: String,
        default: "NA"
    }
});

module.exports = mongoose.model('student', StudentSchema);