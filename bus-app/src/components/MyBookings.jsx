// src/components/MyBookings.jsx

import React from 'react';
import './MyBookings.css'; // ⏳ Create and customize

// Dummy bookings – will be fetched via API later
const bookings = [
  {
    id: 'BK101',
    busName: 'Shiv Travels',
    from: 'Delhi',
    to: 'Jaipur',
    date: '2025-06-15',
    time: '10:30 AM',
    seatNo: 'A5',
    fare: 499,
    status: 'Confirmed',
  },
  {
    id: 'BK102',
    busName: 'GreenLine Express',
    from: 'Mumbai',
    to: 'Pune',
    date: '2025-06-20',
    time: '6:00 PM',
    seatNo: 'B12',
    fare: 399,
    status: 'Pending',
  },
  {
    id: 'BK103',
    busName: 'MetroLink',
    from: 'Chennai',
    to: 'Bangalore',
    date: '2025-07-01',
    time: '9:15 AM',
    seatNo: 'C3',
    fare: 599,
    status: 'Cancelled',
  },
];

const getStatusClass = (status) => {
  switch (status.toLowerCase()) {
    case 'confirmed': return 'text-success';
    case 'pending': return 'text-warning';
    case 'cancelled': return 'text-danger';
    default: return 'text-muted';
  }
};

const MyBookings = () => {
  return (
    <div className="container my-bookings-page py-5">
      <h2 className="text-center fw-bold text-primary mb-4">🧾 My Bookings</h2>

      {bookings.length === 0 ? (
        <div className="text-center text-muted">You have no bookings yet.</div>
      ) : (
        <div className="row">
          {bookings.map((b) => (
            <div className="col-md-6 col-lg-4 mb-4" key={b.id}>
              <div className="card shadow-sm h-100 booking-card">
                <div className="card-body">
                  <h5 className="card-title">{b.busName}</h5>
                  <p className="card-text mb-1"><strong>Route:</strong> {b.from} ➡ {b.to}</p>
                  <p className="card-text mb-1"><strong>Date:</strong> {b.date}</p>
                  <p className="card-text mb-1"><strong>Time:</strong> {b.time}</p>
                  <p className="card-text mb-1"><strong>Seat:</strong> {b.seatNo}</p>
                  <p className="card-text mb-1"><strong>Fare:</strong> ₹{b.fare}</p>
                  <p className={`fw-bold ${getStatusClass(b.status)}`}>
                    Status: {b.status}
                  </p>
                </div>

                {b.status === 'Confirmed' && (
                  <div className="card-footer bg-transparent text-end border-0">
                    <button className="btn btn-sm btn-outline-danger">
                      Cancel Booking
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
