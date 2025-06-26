// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white pt-4 pb-2 mt-auto">
      <div className="container">
        <div className="row">

          {/* Brand & Description */}
          <div className="col-md-4 mb-3">
            <h4 className="fw-bold text-info">🚌 BusSure</h4>
            <p className="small text-light">
              India’s most reliable local and city bus booking app. We’re committed to connecting even the smallest villages with affordable and verified bus routes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5 className="text-info">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/search" className="footer-link">Book Tickets</a></li>
              <li><a href="/my-bookings" className="footer-link">My Bookings</a></li>
              <li><a href="/support" className="footer-link">Support</a></li>
              <li><a href="/partner" className="footer-link">Become a Partner</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-3">
            <h5 className="text-info">Contact Us</h5>
            <p className="small mb-1"><strong>Email:</strong> support@bussure.in</p>
            <p className="small mb-1"><strong>Phone:</strong> +91 99999-88888</p>
            <p className="small mb-0"><strong>Address:</strong> Jabalpur , MP - 800001</p>
          </div>
        </div>

        <hr className="border-light" />

        <div className="text-center small text-muted">
          © {new Date().getFullYear()} BusSure. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
