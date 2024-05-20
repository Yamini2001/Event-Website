import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Slider.css';

const ImageSlider = ({ images }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const slides = slider.children;
    const slideWidth = slides[0].clientWidth + parseInt(getComputedStyle(slides[0]).marginRight, 10);
    let counter = 1;

    const moveSlides = () => {
      gsap.to(slider, {
        x: -counter * slideWidth,
        duration: 0.5,
        ease: 'power2.inOut',
      });

      counter++;
      if (counter >= slides.length) {
        setTimeout(() => {
          counter = 0;
          gsap.set(slider, { x: 0 });
        }, 500);
      }
    };

    const interval = setInterval(moveSlides, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="slider-container">
      <div className="slider" ref={sliderRef}>
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
