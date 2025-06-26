import React, { useState } from 'react';
import './BusOwnerDashboard.css'; // 👉 Create this file for styling

// Dummy data: Replace with API calls later
const initialBuses = [
  {
    id: 'BUS101',
    busName: 'Shiv Travels',
    from: 'Varanasi',
    to: 'Lucknow',
    date: '2025-06-20',
    time: '07:30 AM',
    fare: 450,
    seats: 40,
    status: 'Pending',
  },
  {
    id: 'BUS102',
    busName: 'Rajdhani Deluxe',
    from: 'Delhi',
    to: 'Agra',
    date: '2025-06-25',
    time: '03:45 PM',
    fare: 300,
    seats: 30,
    status: 'Approved',
  },
];

const BusOwnerDashboard = () => {
  const [buses, setBuses] = useState(initialBuses);
  const [formData, setFormData] = useState({
    busName: '',
    from: '',
    to: '',
    date: '',
    time: '',
    fare: '',
    seats: '',
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
      status: 'Pending',
    };
    setBuses([newBus, ...buses]);
    setFormData({
      busName: '',
      from: '',
      to: '',
      date: '',
      time: '',
      fare: '',
      seats: '',
    });
    alert("Bus submitted for review!");
  };

  return (
    <div className="container py-5 bus-owner-dashboard">
      <h2 className="text-center text-primary fw-bold mb-4">🚌 Bus Owner Dashboard</h2>

      <form className="row g-3 mb-5" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <input
            type="text"
            name="busName"
            className="form-control"
            placeholder="Bus Name"
            required
            value={formData.busName}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            name="from"
            className="form-control"
            placeholder="From"
            required
            value={formData.from}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            name="to"
            className="form-control"
            placeholder="To"
            required
            value={formData.to}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <input
            type="date"
            name="date"
            className="form-control"
            required
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <input
            type="time"
            name="time"
            className="form-control"
            required
            value={formData.time}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <input
            type="number"
            name="fare"
            className="form-control"
            placeholder="Fare (₹)"
            required
            value={formData.fare}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <input
            type="number"
            name="seats"
            className="form-control"
            placeholder="Seats"
            required
            value={formData.seats}
            onChange={handleChange}
          />
        </div>
        <div className="col-12 text-end">
          <button type="submit" className="btn btn-success">Submit Bus</button>
        </div>
      </form>

      <div className="row">
        {buses.map((bus) => (
          <div className="col-md-6 col-lg-4 mb-4" key={bus.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{bus.busName}</h5>
                <p className="card-text"><strong>Route:</strong> {bus.from} ➡️ {bus.to}</p>
                <p className="card-text"><strong>Date:</strong> {bus.date}</p>
                <p className="card-text"><strong>Time:</strong> {bus.time}</p>
                <p className="card-text"><strong>Fare:</strong> ₹{bus.fare}</p>
                <p className="card-text"><strong>Seats:</strong> {bus.seats}</p>
                <p className={`card-text fw-bold status-${bus.status.toLowerCase()}`}>
                  Status: {bus.status}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusOwnerDashboard;
