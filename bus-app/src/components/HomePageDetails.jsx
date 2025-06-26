import React, { useState, useEffect } from "react";
import "./HomePageDetails.css";
import { FaMapMarkerAlt, FaExchangeAlt } from "react-icons/fa";
import axios from "axios";

const HomePageDetails = ({ onSearch }) => {
  const [locations, setLocations] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [travelDate, setTravelDate] = useState("");

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/locations");
        setLocations(res.data);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };
    fetchLocations();
  }, []);

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setFromLocation("");
    setToLocation("");
  };

  const swapLocations = () => {
    setFromLocation(toLocation);
    setToLocation(fromLocation);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedState || !fromLocation || !toLocation || !travelDate || fromLocation === toLocation) {
      alert("Please fill out all fields correctly.");
      return;
    }
    onSearch({ state: selectedState, from: fromLocation, to: toLocation, date: travelDate });
  };

  const placesForSelectedState = locations.find(l => l.state === selectedState)?.places || [];

  return (
    <div className="search-container">
      <h2 className="heading">Book Your Bus</h2>
      <form className="form-card stable-layout" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Choose State</label>
          <div className="input-wrapper">
            <FaMapMarkerAlt className="icon" />
            <select value={selectedState} onChange={handleStateChange}>
              <option value="">-- Select State --</option>
              {locations.map((loc) => (
                <option key={loc.state} value={loc.state}>{loc.state}</option>
              ))}
            </select>
          </div>
        </div>

        {selectedState && (
          <>
            <div className="location-pair">
              <div className="form-group">
                <label>From</label>
                <div className="input-wrapper">
                  <FaMapMarkerAlt className="icon" />
                  <select value={fromLocation} onChange={(e) => setFromLocation(e.target.value)}>
                    <option value="">-- Select From --</option>
                    {placesForSelectedState.map((place) => (
                      <option key={place} value={place}>{place}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button className="swap-button" type="button" onClick={swapLocations} title="Swap Locations">
                <FaExchangeAlt />
              </button>

              <div className="form-group">
                <label>To</label>
                <div className="input-wrapper">
                  <FaMapMarkerAlt className="icon" />
                  <select value={toLocation} onChange={(e) => setToLocation(e.target.value)}>
                    <option value="">-- Select To --</option>
                    {placesForSelectedState.map((place) => (
                      <option key={place} value={place}>{place}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Travel Date</label>
              <input
                type="date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
          </>
        )}

        <button type="submit" className="search-button">Search Buses</button>
      </form>
    </div>
  );
};

export default HomePageDetails;
