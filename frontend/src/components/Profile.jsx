import React from 'react';

const Profile = () => {
  // Get user data from localStorage
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;

  return (
    <div style={{ 
      padding: '40px', 
      maxWidth: '800px', 
      margin: '100px auto 40px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    }}>
      <h1 style={{ color: '#2c3e50', marginBottom: '30px' }}>My Profile</h1>
      
      {user ? (
        <div>
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#3498db' }}>User Information</h3>
            <p><strong>Name:</strong> {user.fullName || 'Not provided'}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role || 'User'}</p>
          </div>
        </div>
      ) : (
        <p>Please log in to view your profile information.</p>
      )}
    </div>
  );
};

export default Profile;
