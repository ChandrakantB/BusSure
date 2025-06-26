import React from "react";
import "./Hoffersection.css";
import { FaTicketAlt, FaPercent, FaGift } from "react-icons/fa";

const offers = [
  {
    id: 1,
    icon: <FaTicketAlt />,
    title: "Flat 20% OFF",
    description: "On your first bus booking. Use code FIRST20",
    bgColor: "#ff6f61",
  },
  {
    id: 2,
    icon: <FaPercent />,
    title: "Save up to ₹150",
    description: "With our exclusive wallet cashback offer",
    bgColor: "#007bff",
  },
  {
    id: 3,
    icon: <FaGift />,
    title: "Festival Special",
    description: "Extra 10% discount on selected routes",
    bgColor: "#ff9800",
  },
  {
    id: 4,
    icon: <FaTicketAlt />,
    title: "Refer & Earn",
    description: "Get ₹100 for every friend who books",
    bgColor: "#28a745",
  },
];

const Hoffersection = () => {
  return (
    <section className="offers-section">
      <h2 className="offers-title">Exciting Offers Just For You</h2>
      <div className="offers-container">
        {offers.map(({ id, icon, title, description, bgColor }) => (
          <div key={id} className="offer-card" style={{ backgroundColor: bgColor }}>
            <div className="offer-icon">{icon}</div>
            <div className="offer-content">
              <h3 className="offer-title">{title}</h3>
              <p className="offer-desc">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hoffersection;
