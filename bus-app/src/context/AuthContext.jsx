// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Auto-login if token exists in localStorage
  useEffect(() => {
    const token = localStorage.getItem('bussure_token');
    const storedUser = localStorage.getItem('bussure_user');
    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData, token) => {
    localStorage.setItem('bussure_token', token);
    localStorage.setItem('bussure_user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('bussure_token');
    localStorage.removeItem('bussure_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Export this so you can use it in Navbar, UserMenu etc.
export const useAuth = () => useContext(AuthContext);
