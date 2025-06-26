import React, { useState } from 'react';
import './Support.css'; // You'll create styles accordingly

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation (expandable)
    if (!formData.name || !formData.email || !formData.issue) {
      alert('Please fill in all fields.');
      return;
    }

    console.log('Support request:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', issue: '' });
  };

  return (
    <div className="support-container py-4 px-3 px-md-5">
      <h2 className="text-center mb-4">🛠️ Need Help? We're here for you</h2>

      <div className="support-content row">
        {/* Contact Form */}
        <div className="col-md-6">
          <h4>📩 Contact Us</h4>
          <form onSubmit={handleSubmit} className="support-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="form-control my-2"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="form-control my-2"
              required
            />
            <textarea
              name="issue"
              rows="4"
              placeholder="Describe your issue..."
              value={formData.issue}
              onChange={handleChange}
              className="form-control my-2"
              required
            />
            <button className="btn btn-primary w-100">Submit</button>
          </form>
          {submitted && <p className="text-success mt-2">✅ Support request submitted!</p>}
        </div>

        {/* FAQ & Support Info */}
        <div className="col-md-6 mt-4 mt-md-0">
          <h4>❓ Frequently Asked Questions</h4>
          <ul className="faq-list">
            <li><strong>How do I cancel a booking?</strong><br />Go to "My Bookings" and click "Cancel".</li>
            <li><strong>Can I change travel date?</strong><br />Not yet, but cancellation and re-booking is supported.</li>
            <li><strong>What if I didn’t receive a ticket?</strong><br />Check your email spam or contact support below.</li>
          </ul>

          <div className="mt-4">
            <h5>📞 Contact Info</h5>
            <p><strong>Email:</strong> support@bussure.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Hours:</strong> 9:00 AM – 6:00 PM (Mon–Sat)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
