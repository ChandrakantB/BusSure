// src/components/FeaturesGrid.jsx
import React from "react";

const features = [
  {
    icon: "🧭",
    title: "Local Village Connectivity",
    description:
      "We cover not only cities but remote villages, ensuring access to transportation for all.",
  },
  {
    icon: "🔐",
    title: "Verified Bus Partners",
    description:
      "Only verified bus owners are allowed, ensuring your safety and reliability.",
  },
  {
    icon: "💺",
    title: "Seat Selection",
    description: "Choose your preferred seat while booking your ticket online.",
  },
  {
    icon: "📲",
    title: "Easy Booking & Cancellation",
    description:
      "Book in seconds, cancel with one tap. Your travel, your control.",
  },
  {
    icon: "📡",
    title: "Real-Time Availability",
    description:
      "Get updated data on available buses, timings, and fares instantly.",
  },
  {
    icon: "🌐",
    title: "Multilingual Support",
    description:
      "Enjoy the experience in your native language. We're truly Bharat-first!",
  },
];

const FeaturesGrid = () => {
  return (
    <section className="bg-[#fdfdfd] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center font-bold text-primary mb-10 text-2xl md:text-3xl">
          ✨ Why Choose BusSure?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition transform duration-200 p-6 text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h5 className="font-semibold text-lg">{feature.title}</h5>
              <p className="text-gray-500 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
