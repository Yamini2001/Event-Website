// src/components/Marquee.js
import React from 'react';
import './Marquee.css';

const Marquee = () => {
    return (
        <div className="marquee-container">
            <div className="marquee-content">
                <ul>
                <li><p>Event tour: Oasis Bus tour</p></li>
                <li><p>JLM Stadium</p></li>
                <li><p>Delhi</p></li>
                </ul>
            </div>
        </div>
    );
};

export default Marquee;
