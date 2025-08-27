// src/pages/BusOwnerDashboard.jsx
import React, { useState } from "react";

const initialBuses = [
  {
    id: "BUS101",
    busName: "Shiv Travels",
    from: "Varanasi",
    to: "Lucknow",
    date: "2025-06-20",
    time: "07:30 AM",
    fare: 450,
    seats: 40,
    status: "Pending",
  },
  {
    id: "BUS102",
    busName: "Rajdhani Deluxe",
    from: "Delhi",
    to: "Agra",
    date: "2025-06-25",
    time: "03:45 PM",
    fare: 300,
    seats: 30,
    status: "Approved",
  },
];

const BusOwnerDashboard = () => {
  const [buses, setBuses] = useState(initialBuses);
  const [formData, setFormData] = useState({
    busName: "",
    from: "",
    to: "",
    date: "",
    time: "",
    fare: "",
    seats: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBus = {
      ...formData,
      id: `BUS${Math.floor(Math.random() * 10000)}`,
      status: "Pending",
    };
    setBuses([newBus, ...buses]);
    setFormData({
      busName: "",
      from: "",
      to: "",
      date: "",
      time: "",
      fare: "",
      seats: "",
    });
    alert("Bus submitted for review!");
  };

  const statusColors = {
    Pending: "text-orange-500",
    Approved: "text-green-600",
    Rejected: "text-red-600",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-blue-600 mb-8">
        🚌 Bus Owner Dashboard
      </h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-6 rounded-xl shadow-md mb-10"
      >
        <input
          type="text"
          name="busName"
          placeholder="Bus Name"
          className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          required
          value={formData.busName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="from"
          placeholder="From"
          className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          required
          value={formData.from}
          onChange={handleChange}
        />
        <input
          type="text"
          name="to"
          placeholder="To"
          className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          required
          value={formData.to}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          required
          value={formData.date}
          onChange={handleChange}
        />
        <input
          type="time"
          name="time"
          className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          required
          value={formData.time}
          onChange={handleChange}
        />
        <input
          type="number"
          name="fare"
          placeholder="Fare (₹)"
          className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          required
          value={formData.fare}
          onChange={handleChange}
        />
        <input
          type="number"
          name="seats"
          placeholder="Seats"
          className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          required
          value={formData.seats}
          onChange={handleChange}
        />
        <div className="col-span-full flex justify-end">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition"
          >
            Submit Bus
          </button>
        </div>
      </form>

      {/* Buses List */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {buses.map((bus) => (
          <div
            key={bus.id}
            className="bg-white rounded-xl shadow-md p-5 border border-gray-200"
          >
            <h5 className="text-lg font-semibold text-gray-800 mb-2">
              {bus.busName}
            </h5>
            <p className="text-gray-600">
              <strong>Route:</strong> {bus.from} ➡️ {bus.to}
            </p>
            <p className="text-gray-600">
              <strong>Date:</strong> {bus.date}
            </p>
            <p className="text-gray-600">
              <strong>Time:</strong> {bus.time}
            </p>
            <p className="text-gray-600">
              <strong>Fare:</strong> ₹{bus.fare}
            </p>
            <p className="text-gray-600">
              <strong>Seats:</strong> {bus.seats}
            </p>
            <p
              className={`font-bold mt-2 ${
                statusColors[bus.status] || "text-gray-500"
              }`}
            >
              Status: {bus.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusOwnerDashboard;
