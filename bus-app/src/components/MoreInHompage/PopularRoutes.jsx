// src/components/PopularRoutes.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleClick = (from, to) => {
    navigate(`/search?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`);
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center font-bold text-blue-600 mb-10 text-2xl md:text-3xl">
          🚍 Popular Routes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularRoutes.map((route, index) => (
            <button
              key={index}
              onClick={() => handleClick(route.from, route.to)}
              className="group block w-full bg-white rounded-lg border border-gray-300 shadow-sm hover:bg-blue-50 hover:shadow-lg transition duration-200 text-gray-900 h-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
            >
              <div className="p-4 min-h-[84px] flex flex-col justify-center">
                <h5 className="mb-1 font-semibold text-lg group-hover:text-blue-700">
                  {route.from} ➡️ {route.to}
                </h5>
                <p className="text-gray-500 text-sm mb-0">Quick Book</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRoutes;
