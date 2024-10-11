// backend/models/Note.js
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true, maxlength: 1000000 }, // Adjust max length if needed
}, {
    timestamps: true, // Optional: add createdAt and updatedAt fields
});

noteSchema.index({ content: 'text' }); // Create a text index on the content field

module.exports = mongoose.model('Note', noteSchema);
