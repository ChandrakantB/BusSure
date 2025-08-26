import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link component
import { useAuth } from "../context/AuthContext";

// Mock UserMenu component for a realistic logged-in state
const UserMenu = () => (
  <div className="relative group">
    <div className="flex items-center space-x-3 px-4 py-2 rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg">
      <div className="w-9 h-9 rounded-full bg-orange-400 flex items-center justify-center text-white font-bold text-sm">
        JD
      </div>
      <span className="font-semibold text-sm">John Doe</span>
      <svg className="w-4 h-4 text-gray-500 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
);

function Navbar({ onLoginClick, onSignupClick }) {
  // Mock auth for a real-world scenario
  const user = null; // Change to {} to see the UserMenu

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar Container */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo and Brand Name */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
                  <span className="text-xl">🚌</span>
                </div>
                <span className="text-2xl font-bold text-gray-800">
                  BusSure
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              {[
                { name: 'Home', to: '/' },
                { name: 'Book Tickets', to: '/book' },
                { name: 'My Bookings', to: '/my-bookings' },
                { name: 'Support', to: '/support' },
              ].map((item) => (
                <Link 
                  key={item.name}
                  to={item.to} 
                  className="relative text-gray-600 px-4 py-2 hover:text-orange-500 font-medium transition-colors duration-200 group"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Auth Buttons / User Menu */}
            <div className="hidden md:flex items-center space-x-3">
              {user ? (
                <UserMenu />
              ) : (
                <>
                  <button
                    onClick={onLoginClick}
                    className="px-6 py-2.5 rounded-lg text-gray-700 font-semibold hover:bg-gray-100 transition-colors duration-200"
                  >
                    Login
                  </button>
                  <button
                    onClick={onSignupClick}
                    className="px-6 py-2.5 rounded-lg bg-orange-500 text-white font-semibold shadow-md hover:bg-orange-600 transition-colors duration-200"
                  >
                    Get Started
                  </button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen 
            ? 'max-h-96 opacity-100 py-4' 
            : 'max-h-0 opacity-0'
        } bg-white border-t border-gray-100`}>
          <div className="px-4 space-y-3">
            {[
              { name: 'Home', to: '/' },
              { name: 'Book Tickets', to: '/book' },
              { name: 'My Bookings', to: '/my-bookings' },
              { name: 'Support', to: '/support' },
            ].map((item) => (
              <Link 
                key={item.name}
                to={item.to}
                className="block px-4 py-3 text-gray-600 hover:text-orange-500 font-medium transition-colors duration-200 rounded-lg hover:bg-gray-100"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              {user ? (
                <UserMenu />
              ) : (
                <>
                  <button
                    onClick={onLoginClick}
                    className="w-full px-6 py-2.5 rounded-lg text-gray-700 font-semibold hover:bg-gray-100 transition-colors duration-200"
                  >
                    Login
                  </button>
                  <button
                    onClick={onSignupClick}
                    className="w-full px-6 py-2.5 rounded-lg bg-orange-500 text-white font-semibold shadow-md hover:bg-orange-600 transition-colors duration-200"
                  >
                    Get Started
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      
    </>
  );
}

export default Navbar;