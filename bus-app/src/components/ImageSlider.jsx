import React from "react";
import Slider from "react-slick";
import img1 from "../assets/bus1.png";
import img2 from "../assets/bus2.png";
import img3 from "../assets/bus3.png";

export default function ImageSlider() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <Slider {...settings}>
        {[img1, img2, img3].map((src, idx) => (
          <div key={idx} className="w-full h-[90vh]">
            <img
              src={src}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover brightness-75 rounded-none"
              loading="lazy"
            />
          </div>
        ))}
      </Slider>

      {/* Custom dots styling */}
      <style>{`
        .slick-dots {
          bottom: 20px;
        }
        .slick-dots li button:before {
          color: #ffffff !important;
          opacity: 0.6 !important;
          font-size: 12px;
        }
        .slick-dots li.slick-active button:before {
          color: #f43f5e !important; /* Tailwind rose-500 */
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}
