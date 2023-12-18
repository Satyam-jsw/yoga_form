// userSchema.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        default: true,
    },
    phone: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    selectedBatch:  {
            type: String,
            required: true,
        },
    fee: {
        type: String,
        default: null,
    },
    enrollmentStatus: {
        type: Boolean, // True if enrolled for the current month
        default: false,
    },
    subscriptionStart: {
        type: Date,
        default: null,
    },
    subscriptionEnd: {
        type: Date,
        default: null,
    },
});

module.exports = mongoose.model('User', userSchema);
