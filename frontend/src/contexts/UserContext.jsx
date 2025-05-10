import React, { createContext, useState, useContext, useEffect } from 'react';

// Create context
const UserContext = createContext();

// Create provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check localStorage on mount
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (err) {
      console.error('Error retrieving user from localStorage:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Login function
  const login = (userData) => {
    try {
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      return true;
    } catch (err) {
      console.error('Error logging in:', err);
      setError(err);
      return false;
    }
  };

  // Logout function
  const logout = () => {
    try {
      localStorage.removeItem('user');
      setUser(null);
    } catch (err) {
      console.error('Error logging out:', err);
      setError(err);
    }
  };

  // Update user data
  const updateUser = (userData) => {
    try {
      const updatedUser = { ...user, ...userData };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
      return true;
    } catch (err) {
      console.error('Error updating user:', err);
      setError(err);
      return false;
    }
  };

  // Simple fallback if there's an error
  if (error) {
    console.error('UserContext error:', error);
  }

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        error,
        login,
        logout,
        updateUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for using user context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    console.error('useUser must be used within a UserProvider');
    return {
      user: null,
      loading: false,
      error: new Error('Context not available'),
      login: () => false,
      logout: () => {},
      updateUser: () => false
    };
  }
  return context;
};

export default UserContext;
