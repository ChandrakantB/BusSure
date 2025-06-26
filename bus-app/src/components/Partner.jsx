// src/components/Partner.jsx

import React, { useState, useEffect } from 'react';
// import './Partner.css';
import { useNavigate } from 'react-router-dom';

const Partner = () => {
  const [partnerInfo, setPartnerInfo] = useState({
    name: '',
    companyName: '',
    phone: '',
    email: '',
  });

  const [isApproved, setIsApproved] = useState(false); // This will come from backend later
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPartnerInfo({ ...partnerInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send form data to backend
    alert('Application submitted successfully ✅');
    console.log('Partner Info:', partnerInfo);
    setPartnerInfo({ name: '', companyName: '', phone: '', email: '' });
  };

  // Dummy check for now (replace with actual auth check)
  useEffect(() => {
    // Simulate fetching partner status from backend
    const status = localStorage.getItem('partner_approved') === 'true';
    setIsApproved(status);
  }, []);

  return (
    <div className="container py-5 partner-page">
      <h2 className="text-center text-primary fw-bold mb-4">🚍 Partner with Bussure</h2>

      <p className="lead text-center mb-5 text-muted">
        Join the Bussure Partner Program and grow your bus business by reaching thousands of travelers daily. 
        As a verified partner, you can easily manage your fleet, schedule routes, track bookings, and 
        increase occupancy by listing your buses across city and village routes. 
        Our goal is to empower **local bus operators** and make public transport more accessible for everyone. 
        Apply today and be a part of our transport revolution!
      </p>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={handleSubmit} className="card shadow p-4">
            <h4 className="mb-3 text-dark fw-semibold">📝 Apply as a Partner</h4>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={partnerInfo.name}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="companyName" className="form-label">Company Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={partnerInfo.companyName}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Contact Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={partnerInfo.phone}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={partnerInfo.email}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Submit Application
            </button>
          </form>

          <div className="text-center mt-4">
            <button
              className={`btn ${isApproved ? 'btn-success' : 'btn-outline-secondary'} mt-3`}
              disabled={!isApproved}
              onClick={() => isApproved && navigate('/partner/dashboard')}
            >
              {isApproved ? 'Go to Dashboard ➡️' : 'Request not approved yet ❌'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
