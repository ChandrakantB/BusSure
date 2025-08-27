import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const menuRef = useRef();

  const toggleMenu = () => setOpen((prev) => !prev);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className="relative inline-block text-left">
      <button
        onClick={toggleMenu}
        className="px-4 py-2 text-sm font-semibold text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 transition"
      >
        👋 Hi, {user?.name?.split(' ')[0] || 'User'}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="px-4 py-2 text-xs text-gray-500">
            Logged in as <strong>{user?.email}</strong>
          </div>
          <div className="border-t border-gray-100 my-1"></div>
          <button
            onClick={handleLogout}
            className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition"
          >
            🚪 Logout
          </button>
          <button
            onClick={() => navigate('/my-bookings')}
            className="flex w-full items-center px-4 py-2 text-sm text-indigo-600 hover:bg-indigo-50 rounded-md transition"
          >
            🎟️ My Bookings
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
