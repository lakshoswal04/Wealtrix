import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the authentication context
const AuthContext = createContext();

// Mock user database (in a real app, this would be on a server)
const mockUsers = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '9876543210',
    password: 'password123'
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane@example.com',
    phone: '8765432109',
    password: 'password123'
  }
];

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem('wealtrixUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login function
  const login = (email, password) => {
    setError('');
    
    // Find user in mock database
    const user = mockUsers.find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );
    
    if (!user) {
      setError('No user found with this email');
      return false;
    }
    
    if (user.password !== password) {
      setError('Incorrect password');
      return false;
    }
    
    // Create a user object without the password
    const authenticatedUser = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone
    };
    
    // Store user in state and localStorage
    setCurrentUser(authenticatedUser);
    localStorage.setItem('wealtrixUser', JSON.stringify(authenticatedUser));
    return true;
  };

  // Signup function
  const signup = (userData) => {
    setError('');
    
    // Check if email already exists
    const existingUser = mockUsers.find(
      (user) => user.email.toLowerCase() === userData.email.toLowerCase()
    );
    
    if (existingUser) {
      setError('Email already in use');
      return false;
    }
    
    // Check if passwords match
    if (userData.password !== userData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    
    // Create new user
    const newUser = {
      id: mockUsers.length + 1,
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      phone: userData.phone,
      password: userData.password
    };
    
    // Add to mock database
    mockUsers.push(newUser);
    
    // Create a user object without the password
    const authenticatedUser = {
      id: newUser.id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      phone: newUser.phone
    };
    
    // Store user in state and localStorage
    setCurrentUser(authenticatedUser);
    localStorage.setItem('wealtrixUser', JSON.stringify(authenticatedUser));
    return true;
  };

  // Logout function
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('wealtrixUser');
  };

  // Social login function (mock)
  const socialLogin = (provider) => {
    setError('');
    
    // Mock social login
    const socialUser = {
      id: mockUsers.length + 1,
      firstName: provider === 'google' ? 'Google' : 'Facebook',
      lastName: 'User',
      email: `${provider}user@example.com`,
      phone: '1234567890'
    };
    
    setCurrentUser(socialUser);
    localStorage.setItem('wealtrixUser', JSON.stringify(socialUser));
    return true;
  };

  const value = {
    currentUser,
    login,
    signup,
    logout,
    socialLogin,
    loading,
    error
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
