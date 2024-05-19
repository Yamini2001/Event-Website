import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Slider.css';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';
import image4 from '../assets/images/image4.png';

const Slider = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const images = sliderRef.current.querySelectorAll('.slide');

        gsap.to(images, {
            xPercent: -100 * (images.length - 1),
            ease: 'none',
            duration: 16,
            repeat: -1,
            yoyo: true,
            stagger: {
                each: 4,
                repeat: -1,
            },
        });
    }, []);

    return (
        <div className="slider-container" ref={sliderRef}>
            <div className="slider-track">
                <div className="slide"><img src={image1} alt="Image 1" /></div>
                <div className="slide"><img src={image2} alt="Image 2" /></div>
                <div className="slide"><img src={image3} alt="Image 3" /></div>
                <div className="slide"><img src={image4} alt="Image 4" /></div>
            </div>
        </div>
    );
};

export default Slider;
