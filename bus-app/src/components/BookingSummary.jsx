// src/pages/BookingSummaryPage.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingSummaryPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state?.bus || !state?.seats) {
    return (
      <p className="text-center text-red-600 mt-10 text-lg">
        Invalid booking. Please select a bus and seats first.
      </p>
    );
  }

  const { bus, seats } = state;

  const handleProceed = () => {
    navigate("/payment");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Booking Summary
        </h2>

        {/* Bus Info */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-3">🚌 Bus Info</h3>
          <div className="space-y-1 text-gray-600">
            <p>
              <span className="font-semibold">Operator:</span> {bus.operator}
            </p>
            <p>
              <span className="font-semibold">Route:</span> {bus.from} ➝ {bus.to}
            </p>
            <p>
              <span className="font-semibold">Departure:</span> {bus.departure}
            </p>
            <p>
              <span className="font-semibold">Arrival:</span> {bus.arrival}
            </p>
          </div>
        </div>

        {/* Seats Info */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-3">💺 Seats</h3>
          <p className="text-gray-600">
            {seats.length > 0 ? seats.join(", ") : "No seats selected"}
          </p>
        </div>

        {/* Fare Breakdown */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-3">
            💰 Fare Breakdown
          </h3>
          <div className="space-y-1 text-gray-600">
            <p>
              <span className="font-semibold">Fare per seat:</span> ₹
              {bus.fare}
            </p>
            <p>
              <span className="font-semibold">Total seats:</span> {seats.length}
            </p>
            <p className="text-lg font-bold text-gray-800">
              Total: ₹{bus.fare * seats.length}
            </p>
          </div>
        </div>

        {/* Proceed Button */}
        <button
          onClick={handleProceed}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition"
        >
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default BookingSummaryPage;
