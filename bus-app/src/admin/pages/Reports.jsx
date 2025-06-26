import React from 'react';
import './Reports.css';

const Reports = () => {
  // Dummy stats
  const stats = {
    totalBuses: 24,
    approvedBuses: 18,
    pendingRequests: 6,
    totalBookings: 1243,
    revenue: 284300,
  };

  return (
    <div className="admin-page reports-page">
      <h2 className="mb-4">📊 Admin Reports</h2>

      <div className="report-grid">
        <div className="report-card bg-primary text-white">
          <h4>Total Buses</h4>
          <p>{stats.totalBuses}</p>
        </div>

        <div className="report-card bg-success text-white">
          <h4>Approved Buses</h4>
          <p>{stats.approvedBuses}</p>
        </div>

        <div className="report-card bg-warning text-dark">
          <h4>Pending Requests</h4>
          <p>{stats.pendingRequests}</p>
        </div>

        <div className="report-card bg-info text-white">
          <h4>Total Bookings</h4>
          <p>{stats.totalBookings}</p>
        </div>

        <div className="report-card bg-dark text-white">
          <h4>Total Revenue</h4>
          <p>₹{stats.revenue.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Reports;
