const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const announcementSchema = new Schema({
    staff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staff'
    },
    subject: {
        type: String
    },
    description: {
        type: String
    }

}, { timestamps: true });

module.exports = mongoose.model('announcement', announcementSchema);