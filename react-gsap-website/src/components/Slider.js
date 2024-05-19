import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Slider.css';

// Placeholder images
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';
import image4 from '../assets/images/image4.png';

const images = [image1, image2, image3, image4];

const Slider = () => {
    const sliderRef = useRef();
    const slideWidth = 800; // Adjust slide width as needed
    const slideDuration = 3; // Adjust slide duration in seconds

    useEffect(() => {
        const slides = sliderRef.current.children;
        const totalSlides = slides.length;

        // Calculate the total distance to move the slider
        const totalDistance = slideWidth * totalSlides;

        const tl = gsap.timeline({ repeat: -1, defaults: { ease: 'none' } });

        // Move all slides from right to left
        tl.to(sliderRef.current, { x: `-=${totalDistance}`, duration: slideDuration * totalSlides });

        // Move all slides from left to right (reverse)
        tl.to(sliderRef.current, { x: 0, duration: 0 }); // Set x value to 0 for immediate return

        // Move slider back to marquee line
        tl.to(sliderRef.current, { y: '-=100%', duration: 1 });

        return () => tl.kill();
    }, []);

    return (
        <div className="slider-container" ref={sliderRef}>
            {images.map((image, index) => (
                <div className="slider-image" key={index}>
                    <img src={image} alt={`Slide ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};

export default Slider;
