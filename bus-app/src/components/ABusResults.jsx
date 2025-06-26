import React from "react";
import "./ABusResults.css";
import { FaBusAlt, FaRupeeSign } from "react-icons/fa";

const ABusResults = ({ from, to, date, buses }) => {
  return (
    <section className="bus-results">
      <h2 className="results-heading">
        Buses from <span className="highlight">{from}</span> to <span className="highlight">{to}</span> on{" "}
        <span className="highlight">{date}</span>
      </h2>

      <div className="bus-list">
        {buses.length === 0 ? (
          <p className="no-buses">No buses found for this route and date.</p>
        ) : (
          buses.map((bus) => (
            <div className="bus-card" key={bus._id}>
              <div className="bus-header">
                <FaBusAlt className="bus-icon" />
                <div>
                  <h3>{bus.operator}</h3>
                  <p className="bus-type">{bus.type}</p>
                </div>
              </div>

              <div className="bus-details">
                <div>
                  <strong>Departure:</strong>
                  <p>{bus.departure}</p>
                </div>
                <div>
                  <strong>Arrival:</strong>
                  <p>{bus.arrival}</p>
                </div>
                <div>
                  <strong>Duration:</strong>
                  <p>{bus.duration}</p>
                </div>
                <div>
                  <strong>Seats Left:</strong>
                  <p>{bus.seatsAvailable}</p>
                </div>
                <div>
                  <strong>Price:</strong>
                  <p>
                    <FaRupeeSign className="rupee-icon" />
                    {bus.price}
                  </p>
                </div>
              </div>

              <button className="book-now-btn">Book Now</button>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ABusResults;
