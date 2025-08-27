// src/components/Testimonials.jsx
import React from "react";

const testimonials = [
  {
    name: "Ravi Kumar",
    location: "Muzaffarpur, Bihar",
    message:
      "Finally an app that connects my village! Booking is smooth and transparent.",
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
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center font-bold text-primary mb-10 text-2xl md:text-3xl">
          💬 What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="p-6 h-full shadow-sm rounded-lg bg-white hover:-translate-y-1 hover:shadow-xl transition duration-200 w-full"
            >
              <p className="mb-3">“{t.message}”</p>
              <div className="font-semibold">{t.name}</div>
              <small className="text-gray-500">{t.location}</small>
              <div className="text-yellow-500 mt-2">
                {"⭐".repeat(t.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
