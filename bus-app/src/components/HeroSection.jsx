// src/components/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container text-center py-5 text-dark">
        <h1 className="display-5 fw-bold">Connecting Cities & Villages 🚌</h1>
        <p className="lead mt-3 mb-4">
          View routes of the local buses and book buses seamlessly across India, from metro cities to remote villages.
        </p>
        <Link to="/book" className="btn btn-primary btn-lg shadow">
          Search Buses
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
