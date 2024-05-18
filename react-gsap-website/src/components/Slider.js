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
    const halfSlides = Math.ceil(totalSlides / 2);

    const tl1 = gsap.timeline({
      repeat: -1,
      defaults: { duration: slideDuration, ease: 'power1.inOut' }
    });

    const tl2 = gsap.timeline({
      repeat: -1,
      defaults: { duration: slideDuration, ease: 'power1.inOut' }
    });

    images.forEach((_, i) => {
      tl1.to(slides[i], { x: `-${slideWidth * (totalSlides - 1 - i)}px`, ease: 'none', delay: slideDuration * i });
      tl2.to(slides[i], { x: 0, ease: 'none', delay: slideDuration * (i + halfSlides) });
    });

    return () => {
      tl1.kill();
      tl2.kill();
    };
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