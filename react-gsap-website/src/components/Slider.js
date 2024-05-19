// src/components/Slider.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Slider.css';

// Placeholder images
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';

const images = [image1, image2, image3];

const Slider = () => {
    const sliderRef = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to('.slider-container', {
                xPercent: -100 * (images.length - 1),
                duration: images.length * 2,
                ease: 'none',
                repeat: -1,
                repeatDelay: 1,
                delay: 1,
                scrollTrigger: {
                    trigger: '.slider-container',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });
        }, sliderRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="slider-wrapper">
            <div className="slider-container" ref={sliderRef}>
                {images.map((image, index) => (
                    <div className="slider-image" key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
