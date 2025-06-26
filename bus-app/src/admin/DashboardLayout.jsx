// src/admin/DashboardLayout.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './DashboardLayout.css';

const DashboardLayout = () => {
  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <h3 className="sidebar-title">🛠️ Admin Panel</h3>
        <nav>
          <ul>
            <li><Link to="/admin/dashboard">Dashboard Home</Link></li>
            <li><Link to="/admin/dashboard/approvals">Pending Approvals</Link></li>
            <li><Link to="/admin/dashboard/buses">All Buses</Link></li>
            <li><Link to="/admin/dashboard/reports">Reports</Link></li>
          </ul>
        </nav>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <h4>Welcome, Admin</h4>
        </header>
        <div className="admin-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
