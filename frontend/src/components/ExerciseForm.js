// src/components/ExerciseForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ExerciseForm = () => {
    const [name, setName] = useState('');
    const [duration, setDuration] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/exercises', { name, duration });
            setName('');
            setDuration('');
            // Optionally, add a success message or refresh the exercise list here
        } catch (error) {
            console.error('Error adding exercise:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Exercise Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
            />
            <input 
                type="number" 
                placeholder="Duration (in minutes)" 
                value={duration} 
                onChange={(e) => setDuration(e.target.value)} 
                required 
            />
            <button type="submit">Add Exercise</button>
        </form>
    );
};

export default ExerciseForm;
