// VerticalMarquee.js
import React from 'react';
import './VerticalMarquee.css';
import Logo from '../assets/images/logo.png';

const VerticalMarquee = () => {
    return (
        <div className="vertical-marquee">
            <div className="marquee-content">
                <p className='text'>Event tour: Oasis Bus tour JLM Stadium, Delhi</p>
                <img src={Logo} alt="Logo 1" className="marquee-item"/>
                <p>Collection Lives: Meta Live</p>
                <img src={Logo} alt="Logo 2" className="marquee-item"/>
            </div>
        </div>
    );
};

export default VerticalMarquee;
