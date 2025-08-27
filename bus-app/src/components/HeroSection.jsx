// src/components/HeroSection.jsx
import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 via-white to-blue-100 min-h-[70vh] flex items-center border-b border-gray-200">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          Connecting <span className="text-blue-600">Cities</span> &{" "}
          <span className="text-blue-600">Villages</span> 🚌
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Seamlessly view and book buses across India — from bustling metro
          cities to the most remote villages. Travel made simple and accessible
          for everyone.
        </p>

        {/* CTA Button */}
        <div className="mt-8 flex justify-center">
          <Link
            to="/book"
            className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            🚍 Search Buses
          </Link>
        </div>
      </div>

      {/* Decorative Background Element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-300 rounded-full blur-2xl opacity-20"></div>
      </div>
    </section>
  );
};

export default HeroSection;
