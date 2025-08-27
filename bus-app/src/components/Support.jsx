// src/components/Support.jsx
import React, { useState } from 'react';

const SUPPORT_FAQS = [
  {
    question: "How do I cancel a booking?",
    answer: `Go to "My Bookings" and click "Cancel".`,
  },
  {
    question: "Can I change travel date?",
    answer: `Not yet, but cancellation and re-booking is supported.`,
  },
  {
    question: "What if I didn’t receive a ticket?",
    answer: `Check your email spam or contact support below.`,
  },
];

const Support = () => {
  const [formData, setFormData] = useState({ name: '', email: '', issue: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.issue) {
      alert('Please fill in all fields.');
      return;
    }

    console.log('Support request:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', issue: '' });
  };

  return (
    <div className="bg-gray-50 rounded-lg py-8 px-4 sm:px-8 lg:px-16">
      <h2 className="text-2xl font-bold text-center mb-8">
        🛠️ Need Help? We’re here for you
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div>
          <h4 className="text-xl font-semibold mb-4">📩 Contact Us</h4>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="issue"
              rows="4"
              placeholder="Describe your issue..."
              required
              value={formData.issue}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Submit
            </button>
          </form>
          {submitted && (
            <p className="text-green-600 mt-4 font-medium">
              ✅ Support request submitted!
            </p>
          )}
        </div>

        {/* FAQ & Support Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4">❓ Frequently Asked Questions</h4>
          <ul className="space-y-4 mb-8">
            {SUPPORT_FAQS.map((faq, idx) => (
              <li
                key={idx}
                className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500"
              >
                <p className="font-semibold">{faq.question}</p>
                <p className="mt-1 text-gray-700">{faq.answer}</p>
              </li>
            ))}
          </ul>

          <div>
            <h5 className="text-lg font-semibold mb-2">📞 Contact Info</h5>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Email:</span> support@bussure.com
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Phone:</span> +91 98765 43210
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Hours:</span> 9:00 AM – 6:00 PM (Mon–Sat)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
