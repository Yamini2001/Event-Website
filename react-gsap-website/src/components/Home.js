import React from 'react';
import './Home.css';
import Footer from './Footer';
import VerticalMarquee from './VerticalMarquee'; // Import the new component
import Slider from './Slider';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <h1 className='home-title'>
                    <span>ASTR<br/></span>
                    <span className='ix'>IX<br/></span>
                    <span className='events'>EVE<br/></span>
                    <span className='events1'>NTS</span>
                </h1>
                <div className="slider-container">
                    <Slider />
                </div>
                <div className="vertical-marquee-container">
                    <VerticalMarquee /> {/* Add the vertical marquee */}
                </div>
            </div>
            <Footer /> {/* Ensure Footer is only rendered once */}
        </div>
    );
};

export default Home;
