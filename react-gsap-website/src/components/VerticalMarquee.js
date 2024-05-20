// VerticalMarquee.js
import React from 'react';
import './VerticalMarquee.css';
import Logo from '../assets/images/astrix logo.png';

const VerticalMarquee = () => {
    return (
        <div className="vertical-marquee">
            <ul className="marquee-content">
                <li>Event tour: Oasis Bus tour JLM Stadium, Delhi</li>
                <li><img src={Logo} alt="Logo 1" className="marquee-item"/></li>
                <li>Collection Lives: Meta Live</li>
                <li><img src={Logo} alt="Logo 2" className="marquee-item"/></li>
                </ul>
            </div>
    );
};

export default VerticalMarquee;


