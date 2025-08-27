// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-8 pb-4 mt-auto">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand & Description */}
        <div>
          <h4 className="text-2xl font-bold text-cyan-400">🚌 BusSure</h4>
          <p className="text-sm mt-2 text-gray-400">
            India’s most reliable local and city bus booking app. 
            We’re committed to connecting even the smallest villages 
            with affordable and verified bus routes.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-lg font-semibold text-cyan-400 mb-2">Quick Links</h5>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/search" className="hover:text-white transition">Book Tickets</a></li>
            <li><a href="/my-bookings" className="hover:text-white transition">My Bookings</a></li>
            <li><a href="/support" className="hover:text-white transition">Support</a></li>
            <li><a href="/partner" className="hover:text-white transition">Become a Partner</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h5 className="text-lg font-semibold text-cyan-400 mb-2">Contact Us</h5>
          <p className="text-sm"><strong>Email:</strong> support@bussure.in</p>
          <p className="text-sm"><strong>Phone:</strong> +91 99999-88888</p>
          <p className="text-sm"><strong>Address:</strong> Jabalpur , MP - 800001</p>
        </div>
      </div>

      <hr className="border-gray-700 my-4" />

      <div className="text-center text-xs text-gray-500">
        © {new Date().getFullYear()} BusSure. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
