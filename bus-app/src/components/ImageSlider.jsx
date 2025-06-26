import React from 'react';
import Slider from 'react-slick';
import './ImageSlider.css';
import img1 from '../assets/bus1.png';
import img2 from '../assets/bus2.png';
import img3 from '../assets/bus3.png';

export default function ImageSlider() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true
  };

  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        {[img1, img2, img3].map((src, idx) => (
          <div key={idx} className="slide-item">
            <img src={src} alt={`Slide ${idx + 1}`} className="slide-image" loading="lazy" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
