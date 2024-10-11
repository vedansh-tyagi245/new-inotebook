const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Note = require('./models/Note'); // Import the Note model

// Initialize express app
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json

// Connect to MongoDB (replace with your MongoDB URI)
mongoose.connect('mongodb+srv://vedanshtyagi245:s8h2Kx5TmHLRAy4I@cluster0.ybr7z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define a simple route
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Create a note
app.post('/api/notes', async (req, res) => {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    await note.save();
    res.status(201).send(note);
});

// Get all notes
app.get('/api/notes', async (req, res) => {
    const notes = await Note.find();
    res.send(notes);
});

// Update a note
app.put('/api/notes/:id', async (req, res) => {
    const { title, content } = req.body;
    const note = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
    res.send(note);
});

// Delete a note
app.delete('/api/notes/:id', async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

// Start the server
app.listen(port, () => {
    console.log(`Backend server running on port ${port}`);
});
