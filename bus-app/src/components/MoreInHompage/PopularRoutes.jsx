// src/components/PopularRoutes.jsx
import React from 'react';
import './PopularRoutes.css';
import { Link } from 'react-router-dom';

const popularRoutes = [
  { from: "Delhi", to: "Jaipur" },
  { from: "Mumbai", to: "Pune" },
  { from: "Chennai", to: "Bangalore" },
  { from: "Lucknow", to: "Varanasi" },
  { from: "Patna", to: "Gaya" },
  { from: "Kolkata", to: "Asansol" },
  { from: "Bhopal", to: "Indore" },
  { from: "Ranchi", to: "Dhanbad" },
];

const PopularRoutes = () => {
  return (
    <section className="popular-routes-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold text-primary mb-4">🚍 Popular Routes</h2>
        <div className="row">
          {popularRoutes.map((route, index) => (
            <div key={index} className="col-sm-6 col-md-4 col-lg-3 mb-3">
              <Link to={`/search?from=${route.from}&to=${route.to}`} className="route-card shadow-sm">
                <div className="p-3">
                  <h5 className="mb-1">{route.from} ➡️ {route.to}</h5>
                  <p className="text-muted small mb-0">Quick Book</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRoutes;
