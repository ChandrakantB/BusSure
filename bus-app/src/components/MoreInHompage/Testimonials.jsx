// src/components/Testimonials.jsx
import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Ravi Kumar",
    location: "Muzaffarpur, Bihar",
    message: "Finally an app that connects my village! Booking is smooth and transparent.",
    rating: 5,
  },
  {
    name: "Anjali Verma",
    location: "Bhopal, MP",
    message: "I love the seat selection feature and verified buses.",
    rating: 4,
  },
  {
    name: "Suresh Patel",
    location: "Ahmedabad, Gujarat",
    message: "Great customer support! They resolved my refund in no time.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center text-primary fw-bold mb-4">💬 What Our Users Say</h2>
        <div className="row justify-content-center">
          {testimonials.map((t, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="testimonial-card p-4 h-100 shadow-sm rounded bg-white">
                <p className="mb-3">“{t.message}”</p>
                <div className="fw-bold">{t.name}</div>
                <small className="text-muted">{t.location}</small>
                <div className="text-warning mt-2">
                  {"⭐".repeat(t.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
