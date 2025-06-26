import React, { useState } from 'react';
import axios from 'axios';
import './Modal.css';
import { toast } from 'react-toastify';

const Login = ({ onClose }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', credentials);

      const { token, user } = response.data;
      localStorage.setItem('bussure_token', token);
      localStorage.setItem('bussure_user', JSON.stringify(user));

      toast.success('Login successful! ✅');
      console.log(response.data);

      onClose();
    } catch (error) {
      console.error(error.response?.data || error.message);
      toast.error('Login failed ❌');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>✖</button>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={credentials.email}
            onChange={handleChange}
            className="form-control my-2"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={credentials.password}
            onChange={handleChange}
            className="form-control my-2"
          />
          <button type="submit" className="btn btn-success w-100">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
