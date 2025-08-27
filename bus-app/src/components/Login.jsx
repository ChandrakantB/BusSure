import React, { useState } from 'react';
import axios from 'axios';
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
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-11/12 max-w-md p-6 relative">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Login</h2>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={credentials.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={credentials.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
