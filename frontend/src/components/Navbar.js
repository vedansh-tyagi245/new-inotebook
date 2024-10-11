// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Notes</Link>
                </li>
                <li>
                    <Link to="/exercise">Exercises</Link> {/* Link to Exercise List */}
                </li>
                {/* Add other links if needed */}
            </ul>
        </nav>
    );
};

export default Navbar;
