// backend/models/Exercise.js
const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    duration: { type: Number, required: true }, // in minutes
    date: { type: Date, default: Date.now }, // default to current date
});

module.exports = mongoose.model('Exercise', exerciseSchema);
