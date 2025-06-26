import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './UserMenu.css'; // optional CSS if needed

const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="user-menu position-relative">
      <button
        className="btn btn-sm btn-outline-primary fw-semibold"
        onClick={toggleMenu}
      >
        👋 Hi, {user?.name?.split(' ')[0] || 'User'}
      </button>

      {open && (
        <div className="user-dropdown position-absolute end-0 mt-2 bg-white border shadow rounded p-2 z-10">
          <p className="mb-1 text-muted small">Logged in as <strong>{user?.email}</strong></p>
          <hr className="my-1" />
          <button
            className="btn btn-link text-danger text-start w-100 px-0"
            onClick={handleLogout}
          >
            🚪 Logout
          </button>
          <button
            className="btn btn-link text-primary text-start w-100 px-0"
            onClick={() => navigate('/my-bookings')}
          >
            🎟️ My Bookings
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
