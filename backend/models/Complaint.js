const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const complainSchema = new Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    },
    status: {
        type: String,
        default: "Pending"
    },
    subject: {
        type: String
    },
    description: {
        type: String
    }

}, { timestamps: true });

module.exports = mongoose.model('Complaint', complainSchema);