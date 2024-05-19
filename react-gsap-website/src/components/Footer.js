import React from 'react';
import './Footer.css';
import image1 from '../assets/images/man.png';
import image2 from '../assets/images/man2.png';
import image3 from '../assets/images/man3.png';

const Footer = () => {
    return (
        <footer className="heading-content">
            <h1>Explore Your First <span className="event-line">Event</span></h1>
            <div className='event'>
                <h1>Event Name</h1>
            </div>
            <div className="venue-info">
                <i className="fas fa-map-marker-alt"></i>
                <span className="venue">Venue&nbsp;</span>
                <span className="additional-info">
                    <i className="far fa-clock"></i> &nbsp;04/03/2024
                </span>
                <span className="additional-info">
                     &nbsp;@19:00
                </span>
                <p className='Lorem'><span className='text1'>Lorem ipsum dolor sit amet,</span> <br/>consectetur. Ac lorem massa in morbi <br/> et sed ipsum. Pellentesque mattis<br/> condimentum ut nulla. </p>
                <h2 className='artist'>Artist Lineup</h2>
                <div className="images-container">
                <div className="image-wrapper small-image">
                    <img src={image1} alt="Image 1" />
                    <div className="overlay"></div>
                </div>
                <div className="image-wrapper large-image">
                    <img src={image2} alt="Image 2" />
                    <div className="overlay"></div>
                </div>
                <div className="image-wrapper small-image">
                    <img src={image3} alt="Image 3" />
                    <div className="overlay"></div>
                </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
