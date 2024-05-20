import React from 'react';
import './Home.css';
import Footer from './Footer';
import VerticalMarquee from './VerticalMarquee'; // Import the new component
import Slider from './Slider';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image1.png';
import image3 from '../assets/images/image1.png';
import image4 from '../assets/images/image1.png';


const Home = () => {
    const images = [image1,image2,image3,image4];
    return (
        <div className="home-container">
            <div className="home-content">
                <h1 className='home-title'>
                    <span>ASTR<br/></span>
                    <span className='ix'>IX<br/></span>
                    <span className='events'>EVE<br/></span>
                    <span className='events1'>NTS</span>
                </h1>
                <div className='slide-wrapper'>
                <Slider images={images} />
                <div className="vertical-marquee-container">
                    <VerticalMarquee /> 
                </div>
            </div>
            <Footer /> {/* Ensure Footer is only rendered once */}
        </div>
        </div>
    );
};

export default Home;
