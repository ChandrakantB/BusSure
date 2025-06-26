// src/admin/AdminLogin.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './AdminLogin.css'; // Custom admin login styles
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminLogin = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3000/api/admin/login', credentials);
      const { token, admin } = res.data;

      localStorage.setItem('bussure_admin_token', token);
      localStorage.setItem('bussure_admin', JSON.stringify(admin));

      toast.success('✅ Admin login successful');
      navigate('/admin/dashboard');
    } catch (err) {
      console.error(err);
      toast.error('❌ Invalid credentials');
    }
  };

  return (
    <div className="admin-login-container">
      <form className="admin-login-form" onSubmit={handleLogin}>
        <h2 className="text-center text-primary mb-4">Admin Panel Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Admin Email"
          value={credentials.email}
          onChange={handleChange}
          required
          className="form-control mb-3"
        />

        <div className="password-wrapper mb-3">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
            className="form-control"
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>

        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
