import React from 'react';
import Slider from './Slider'; // Import the Slider component
import './Home.css';
import Marquee from './Marquee';
import Footer from './Footer';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
           <h1 className='home-title'>
              <span>ASTR</span>
              <sapn className="grey-text">IX</sapn>
              <span>EVE</span>
              <span>NTS</span>
           </h1>
            <div className="slider-container">
                    <Slider />
            </div>
            <div className="marquee-container">
                    <Marquee />
            </div>
            <div className='header-container'>
            <Footer/>
            </div>
    </div>
    </div>
    );
};

export default Home;
