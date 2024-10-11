// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Navbar from './components/Navbar';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import ExerciseList from './components/ExerciseList';
import ExerciseForm from './components/ExerciseForm'; // Import the ExerciseForm component


const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes> {/* Use Routes here */}
                <Route path="/" element={<NoteList />} /> {/* Use element prop instead of component */}
                <Route path="/exercise" element={<ExerciseList />} /> {/* Use element prop instead of component */}
                {/* Add other routes as needed */}
            </Routes>
        </Router>
    );
};

export default App;
