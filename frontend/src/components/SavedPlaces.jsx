import React from 'react';

const SavedPlaces = () => {
  // Get user data from localStorage
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;

  if (!user) {
    return (
      <div style={{ 
        padding: '40px', 
        maxWidth: '800px', 
        margin: '100px auto 40px',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#2c3e50', marginBottom: '20px' }}>Saved Places</h1>
        <p>Please log in to view your saved places.</p>
      </div>
    );
  }

  return (
    <div style={{ 
      padding: '40px', 
      maxWidth: '800px', 
      margin: '100px auto 40px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{ color: '#2c3e50', marginBottom: '30px' }}>Your Saved Places</h1>
      <p style={{ marginBottom: '20px' }}>You haven't saved any places yet. Explore destinations and save your favorites!</p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        marginTop: '30px'
      }}>
        {/* Sample saved place card - this would be populated from API data in the future */}
        <div style={{
          padding: '15px',
          borderRadius: '8px',
          backgroundColor: '#f8f9fa',
          border: '1px solid #e9ecef',
          textAlign: 'center',
          transition: 'transform 0.2s ease',
          cursor: 'pointer'
        }}>
          <img 
            src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
            alt="Paris" 
            style={{
              width: '100%',
              height: '150px',
              objectFit: 'cover',
              borderRadius: '6px',
              marginBottom: '10px'
            }}
          />
          <h3 style={{ color: '#3498db', marginBottom: '5px' }}>Paris, France</h3>
          <p style={{ color: '#7f8c8d', fontSize: '0.9rem' }}>Saved on July 10, 2023</p>
        </div>
      </div>
    </div>
  );
};

export default SavedPlaces; 