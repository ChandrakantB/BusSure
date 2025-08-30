// src/pages/BusesPage.jsx
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BusesPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [buses, setBuses] = useState([]);

  useEffect(() => {
    if (!state?.from || !state?.to) return;

    // Mock API buses (replace later with backend fetch)
    const mockBuses = [
      {
        id: 1,
        operator: "Village Express",
        from: state.from.name,
        to: state.to.name,
        departure: "08:30 AM",
        arrival: "11:00 AM",
        fare: 50,
      },
      {
        id: 2,
        operator: "Green Valley Travels",
        from: state.from.name,
        to: state.to.name,
        departure: "02:00 PM",
        arrival: "04:30 PM",
        fare: 60,
      },
    ];

    setBuses(mockBuses);
  }, [state]);

  const handleBook = (bus) => {
    const selectedSeats = ["A1", "A2"]; // later build seat selector
    navigate("/booking-summary", { state: { bus, seats: selectedSeats } });
  };

  if (!state?.from || !state?.to) {
    return <p className="text-center text-red-500 mt-10">No route selected.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Available Buses from {state.from.name} ➝ {state.to.name}
      </h2>

      {buses.map((bus) => (
        <div
          key={bus.id}
          className="border rounded-xl p-4 mb-4 shadow hover:shadow-lg transition"
        >
          <h3 className="text-lg font-bold">{bus.operator}</h3>
          <p>
            {bus.from} ➝ {bus.to}
          </p>
          <p>
            🕒 {bus.departure} → {bus.arrival}
          </p>
          <p className="font-semibold">₹{bus.fare}</p>
          <button
            onClick={() => handleBook(bus)}
            className="mt-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
          >
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default BusesPage;
