// src/components/Hoffersection.jsx
import React from "react";
import { FaTicketAlt, FaPercent, FaGift } from "react-icons/fa";

const offers = [
  {
    id: 1,
    icon: <FaTicketAlt />,
    title: "Flat 20% OFF",
    description: "On your first bus booking. Use code FIRST20",
    bg: "from-rose-500 to-pink-500",
  },
  {
    id: 2,
    icon: <FaPercent />,
    title: "Save up to ₹150",
    description: "With our exclusive wallet cashback offer",
    bg: "from-blue-500 to-indigo-500",
  },
  {
    id: 3,
    icon: <FaGift />,
    title: "Festival Special",
    description: "Extra 10% discount on selected routes",
    bg: "from-amber-500 to-orange-500",
  },
  {
    id: 4,
    icon: <FaTicketAlt />,
    title: "Refer & Earn",
    description: "Get ₹100 for every friend who books",
    bg: "from-green-500 to-emerald-500",
  },
];

const Hoffersection = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
        🎉 Exciting Offers Just For You
      </h2>

      {/* Offer Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {offers.map(({ id, icon, title, description, bg }) => (
          <div
            key={id}
            className={`flex items-start gap-4 p-6 rounded-2xl shadow-lg text-white cursor-default transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-r ${bg}`}
          >
            {/* Icon */}
            <div className="text-3xl bg-white/20 p-3 rounded-full flex items-center justify-center">
              {icon}
            </div>

            {/* Content */}
            <div className="text-left">
              <h3 className="text-lg font-bold mb-1">{title}</h3>
              <p className="text-sm opacity-90 leading-snug">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hoffersection;
