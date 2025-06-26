import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SeatSelection.css';

const SeatSelection = () => {
  const { busId } = useParams();
  const navigate = useNavigate();
  const [bus, setBus] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    const fetchBus = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/buses/${busId}`);
        setBus(res.data);
      } catch (err) {
        console.error('❌ Error fetching bus:', err.message);
      }
    };

    fetchBus();
  }, [busId]);

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const handleProceed = () => {
    navigate('/select-seats/summary', {
      state: {
        bus,
        selectedSeats,
      },
    });
  };

  if (!bus) return <p style={{ textAlign: 'center' }}>🔄 Loading bus details...</p>;

  return (
    <div className="seat-selection">
      <h2>{bus.operator} - {bus.type}</h2>
      <p><strong>From:</strong> {bus.from} → <strong>To:</strong> {bus.to}</p>
      <p><strong>Departure:</strong> {bus.departure}</p>
      <p><strong>Seats Available:</strong> {bus.seatsAvailable}</p>

      <div className="seats-grid">
        {[...Array(bus.seatsAvailable)].map((_, i) => {
          const seatNumber = i + 1;
          const isSelected = selectedSeats.includes(seatNumber);
          return (
            <div
              key={seatNumber}
              className={`seat ${isSelected ? 'selected' : ''}`}
              onClick={() => toggleSeat(seatNumber)}
            >
              {seatNumber}
            </div>
          );
        })}
      </div>

      <button
        className="proceed-btn"
        disabled={selectedSeats.length === 0}
        onClick={handleProceed}
      >
        Proceed to Book ({selectedSeats.length} seat{selectedSeats.length > 1 ? 's' : ''})
      </button>
    </div>
  );
};

export default SeatSelection;
