const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    orgurl: {
        required: true,
        type: String
    },

    shorturl: {
        required: true,
        type: String,
    },

    clicks: {
        required: true,
        type: Number,
        default: 0
    },

    createdAt: {
        default: Date.now,
        type: String
    }
})

module.exports = mongoose.model('Url', serviceSchema);