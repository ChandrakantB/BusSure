// src/admin/pages/PendingApprovals.jsx
import React, { useEffect, useState } from 'react';
import './PendingApprovals.css';

const dummyRequests = [
  {
    id: 'REQ001',
    operator: 'Shiv Travels',
    route: 'Indore → Bhopal',
    date: '2025-07-01',
    time: '09:00 AM',
    fare: 399,
    status: 'Pending',
  },
  {
    id: 'REQ002',
    operator: 'Green Line',
    route: 'Mumbai → Pune',
    date: '2025-07-03',
    time: '11:00 AM',
    fare: 499,
    status: 'Pending',
  },
];

const PendingApprovals = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Replace with real API call in production
    setRequests(dummyRequests);
  }, []);

  const handleApproval = (id, status) => {
    const updated = requests.map((req) =>
      req.id === id ? { ...req, status } : req
    );
    setRequests(updated);
    // In real app: Send PUT request to backend to update status
  };

  return (
    <div className="pending-approvals">
      <h2 className="mb-4">🚍 Pending Bus Approval Requests</h2>

      {requests.length === 0 ? (
        <p>No pending approvals.</p>
      ) : (
        <div className="approval-list">
          {requests.map((req) => (
            <div key={req.id} className="approval-card">
              <h5>{req.operator}</h5>
              <p><strong>Route:</strong> {req.route}</p>
              <p><strong>Date:</strong> {req.date} @ {req.time}</p>
              <p><strong>Fare:</strong> ₹{req.fare}</p>
              <p><strong>Status:</strong> {req.status}</p>

              {req.status === 'Pending' && (
                <div className="approval-actions">
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => handleApproval(req.id, 'Approved')}
                  >
                    Approve
                  </button>
                  <button
                    className="btn btn-danger btn-sm ms-2"
                    onClick={() => handleApproval(req.id, 'Rejected')}
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PendingApprovals;
