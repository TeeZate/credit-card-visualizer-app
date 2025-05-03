// src/context/AuthContext.js
import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  // Mock login function
  const login = (email, password) => {
    const mockUser = {
      id: '123',
      name: 'Demo User',
      email: email,
      token: 'mock-token'
    };
    localStorage.setItem('user', JSON.stringify(mockUser));
    setUser(mockUser);
  };
  
  // Mock register function
  const register = (name, email, password) => {
    const mockUser = {
      id: '123',
      name: name,
      email: email,
      token: 'mock-token'
    };
    localStorage.setItem('user', JSON.stringify(mockUser));
    setUser(mockUser);
  };
  
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };
  
  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};