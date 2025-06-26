import React from "react";
import "./HstateBook.css";
import { FaBusAlt, FaBus } from "react-icons/fa";

const srtcList = [
  {
    id: 1,
    name: "Madhya Pradesh SRTC",
    tagline: "Reliable & Comfortable Travel",
    icon: <FaBusAlt />,
    bgColor: "#a1f6i2",
  },
  {
    id: 2,
    name: "Uttar Pradesh SRTC",
    tagline: "Connecting Cities Seamlessly",
    icon: <FaBusAlt />,
    bgColor: "#50e3c2",
  },
  {
    id: 3,
    name: "Maharashtra SRTC",
    tagline: "Safe Journeys, Every Time",
    icon: <FaBusAlt />,
    bgColor: "#f5a623",
  },
  {
    id: 4,
    name: "Tamil Nadu SRTC",
    tagline: "Efficient Statewide Coverage",
    icon: <FaBusAlt />,
    bgColor: "#d0021b",
  },
];

const HstateBook = () => {
  return (
    <section className="srtc-section">
      <div className="srtc-header">
        <h2>Book Bus Tickets at BusSure</h2>
        <p className="subtitle">From SRTC (State Road Transport Corporation)</p>
      </div>
      <div className="srtc-cards-container">
        {srtcList.map(({ id, name, tagline, icon, bgColor }) => (
          <div
            key={id}
            className="srtc-card"
            style={{ backgroundColor: bgColor }}
            role="button"
            tabIndex={0}
            onClick={() => alert(`Book your tickets for ${name}`)}
            onKeyDown={(e) => {
              if (e.key === "Enter") alert(`Book your tickets for ${name}`);
            }}
          >
            <div className="srtc-icon">{icon}</div>
            <h3 className="srtc-name">{name}</h3>
            <p className="srtc-tagline">{tagline}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HstateBook;
