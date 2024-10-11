// NoteList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NoteForm from './NoteForm';

const NoteList = () => {
    const [notes, setNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState(null); // State to hold the note being edited

    const fetchNotes = async () => {
        const response = await axios.get('http://localhost:5000/api/notes');
        setNotes(response.data);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/notes/${id}`);
            fetchNotes(); // Fetch the updated list after deletion
        } catch (error) {
            console.error("Error deleting the note", error);
        }
    };

    const handleEdit = (note) => {
        setCurrentNote(note); // Set the current note to be edited
    };

    const handleUpdate = async (updatedNote) => {
        try {
            await axios.put(`http://localhost:5000/api/notes/${updatedNote._id}`, updatedNote);
            setCurrentNote(null); // Clear the edit form after submission
            fetchNotes(); // Fetch the updated list after editing
        } catch (error) {
            console.error("Error updating the note", error);
        }
    };

    useEffect(() => {
        fetchNotes(); // Fetch notes on component mount
    }, []);

    return (
        <div>
            <h1>Your Notes</h1>
            <NoteForm fetchNotes={fetchNotes} currentNote={currentNote} onUpdate={handleUpdate} />
            <ul>
                {notes.map(note => (
                    <li key={note._id}>
                        <h2>{note.title}</h2>
                        <p>{note.content}</p>
                        <button onClick={() => handleEdit(note)}>Edit</button>
                        <button onClick={() => handleDelete(note._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NoteList;
