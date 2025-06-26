// src/components/FeaturesGrid.jsx
import React from 'react';
import './FeaturesGrid.css';

const features = [
  {
    icon: "🧭",
    title: "Local Village Connectivity",
    description: "We cover not only cities but remote villages, ensuring access to transportation for all.",
  },
  {
    icon: "🔐",
    title: "Verified Bus Partners",
    description: "Only verified bus owners are allowed, ensuring your safety and reliability.",
  },
  {
    icon: "💺",
    title: "Seat Selection",
    description: "Choose your preferred seat while booking your ticket online.",
  },
  {
    icon: "📲",
    title: "Easy Booking & Cancellation",
    description: "Book in seconds, cancel with one tap. Your travel, your control.",
  },
  {
    icon: "📡",
    title: "Real-Time Availability",
    description: "Get updated data on available buses, timings, and fares instantly.",
  },
  {
    icon: "🌐",
    title: "Multilingual Support",
    description: "Enjoy the experience in your native language. We're truly Bharat-first!",
  },
];

const FeaturesGrid = () => {
  return (
    <section className="features-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold text-primary mb-4">✨ Why Choose BusSure?</h2>
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-sm-6 col-lg-4 mb-4">
              <div className="feature-card p-4 shadow-sm text-center h-100">
                <div className="fs-1 mb-3">{feature.icon}</div>
                <h5 className="fw-semibold">{feature.title}</h5>
                <p className="text-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
