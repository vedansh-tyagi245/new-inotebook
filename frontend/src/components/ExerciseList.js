// src/components/ExerciseList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExerciseForm from './ExerciseForm'; // Ensure the path is correct

const ExerciseList = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        const fetchExercises = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/exercises');
                setExercises(response.data);
            } catch (error) {
                console.error('Error fetching exercises:', error);
            }
        };

        fetchExercises();
    }, []);

    return (
        <div>
            <h2>Your Exercises</h2>
            <ExerciseForm /> {/* Add the ExerciseForm here */}
            <ul>
                {exercises.map((exercise) => (
                    <li key={exercise._id}>
                        {exercise.name} - {exercise.duration} minutes
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExerciseList;
