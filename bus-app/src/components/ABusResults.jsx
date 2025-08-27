// src/components/ABusResults.jsx
import React from "react";
import { FaBusAlt, FaRupeeSign } from "react-icons/fa";

const ABusResults = ({ from, to, date, buses }) => {
  return (
    <section className="bg-gray-100 py-8 px-4">
      <h2 className="text-center mb-8 text-2xl md:text-3xl font-semibold text-gray-800">
        Buses from{" "}
        <span className="text-red-600">{from}</span> to{" "}
        <span className="text-red-600">{to}</span> on{" "}
        <span className="text-red-600">{date}</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {buses.length === 0 ? (
          <p className="col-span-full text-center text-gray-600">
            No buses found for this route and date.
          </p>
        ) : (
          buses.map((bus) => (
            <div
              key={bus._id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center p-4 border-b border-gray-200">
                <FaBusAlt className="text-2xl text-red-600 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-900">{bus.operator}</h3>
                  <p className="text-gray-500 text-sm">{bus.type}</p>
                </div>
              </div>

              {/* Bus Details */}
              <div className="p-4 grid grid-cols-2 gap-y-3 gap-x-4 text-sm md:text-base">
                <div>
                  <strong className="text-gray-600">Departure:</strong>
                  <p className="text-gray-800">{bus.departure}</p>
                </div>
                <div>
                  <strong className="text-gray-600">Arrival:</strong>
                  <p className="text-gray-800">{bus.arrival}</p>
                </div>
                <div>
                  <strong className="text-gray-600">Duration:</strong>
                  <p className="text-gray-800">{bus.duration}</p>
                </div>
                <div>
                  <strong className="text-gray-600">Seats Left:</strong>
                  <p className="text-gray-800">{bus.seatsAvailable}</p>
                </div>
                <div>
                  <strong className="text-gray-600">Price:</strong>
                  <p className="text-gray-800 flex items-center">
                    <FaRupeeSign className="text-red-600 mr-1" />
                    {bus.price}
                  </p>
                </div>
              </div>

              {/* Book Button */}
              <button className="m-4 py-2 rounded-md bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold transition transform active:scale-95 hover:from-red-700 hover:to-red-800">
                Book Now
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ABusResults;
