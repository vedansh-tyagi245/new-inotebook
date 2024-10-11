// NoteForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NoteForm = ({ fetchNotes, currentNote, onUpdate }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (currentNote) {
            setTitle(currentNote.title);   // Pre-fill form with note to be edited
            setContent(currentNote.content);
        } else {
            setTitle('');   // Clear form if no note is being edited
            setContent('');
        }
    }, [currentNote]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (currentNote) {
            // Update the note
            onUpdate({ ...currentNote, title, content });
        } else {
            // Create a new note
            const newNote = { title, content };
            await axios.post('http://localhost:5000/api/notes', newNote);
            fetchNotes();
        }
        setTitle(''); // Clear form after submission
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Note title"
                required
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Note content"
                required
            />
            <button type="submit">
                {currentNote ? 'Update Note' : 'Add Note'}
            </button>
        </form>
    );
};

export default NoteForm;
