import './Modal.css';
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Signup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/signup', formData);
      
      toast.success('Signup successful! ✅');
      console.log(response.data);

      onClose(); // Close modal on success
    } catch (error) {
      console.error(error.response?.data || error.message);
      toast.error('Signup failed ❌');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>✖</button>
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="form-control my-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="form-control my-2"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
            className="form-control my-2"
          />
          <button type="submit" className="btn btn-primary w-100">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
