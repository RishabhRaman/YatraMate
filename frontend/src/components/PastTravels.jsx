import React from 'react';

const PastTravels = () => {
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
        <h1 style={{ color: '#2c3e50', marginBottom: '20px' }}>Past Travels</h1>
        <p>Please log in to view your travel history.</p>
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
      <h1 style={{ color: '#2c3e50', marginBottom: '30px' }}>Your Travel History</h1>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginTop: '20px'
      }}>
        {/* Travel history card 1 */}
        <div style={{
          padding: '20px',
          borderRadius: '8px',
          backgroundColor: '#f8f9fa',
          border: '1px solid #e9ecef',
          display: 'flex',
          gap: '20px'
        }}>
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
            alt="Rome" 
            style={{
              width: '150px',
              height: '100px',
              objectFit: 'cover',
              borderRadius: '6px'
            }}
          />
          <div>
            <h3 style={{ color: '#3498db', marginBottom: '5px' }}>Rome, Italy</h3>
            <p style={{ color: '#7f8c8d', fontSize: '0.9rem', marginBottom: '10px' }}>May 5 - May 12, 2022</p>
            <p style={{ color: '#2c3e50', fontSize: '0.95rem' }}>Explored the Colosseum, Vatican City, and enjoyed authentic Italian cuisine.</p>
            <div style={{ marginTop: '10px' }}>
              <button style={{
                padding: '5px 10px',
                backgroundColor: 'transparent',
                color: '#3498db',
                border: '1px solid #3498db',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                marginRight: '10px'
              }}>
                View Photos
              </button>
              <button style={{
                padding: '5px 10px',
                backgroundColor: 'transparent',
                color: '#2ecc71',
                border: '1px solid #2ecc71',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}>
                View Itinerary
              </button>
            </div>
          </div>
        </div>
        
        {/* Travel history card 2 */}
        <div style={{
          padding: '20px',
          borderRadius: '8px',
          backgroundColor: '#f8f9fa',
          border: '1px solid #e9ecef',
          display: 'flex',
          gap: '20px'
        }}>
          <img 
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
            alt="Paris" 
            style={{
              width: '150px',
              height: '100px',
              objectFit: 'cover',
              borderRadius: '6px'
            }}
          />
          <div>
            <h3 style={{ color: '#3498db', marginBottom: '5px' }}>Paris, France</h3>
            <p style={{ color: '#7f8c8d', fontSize: '0.9rem', marginBottom: '10px' }}>December 15 - December 22, 2021</p>
            <p style={{ color: '#2c3e50', fontSize: '0.95rem' }}>Visited the Eiffel Tower, Louvre Museum, and enjoyed the Christmas markets.</p>
            <div style={{ marginTop: '10px' }}>
              <button style={{
                padding: '5px 10px',
                backgroundColor: 'transparent',
                color: '#3498db',
                border: '1px solid #3498db',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                marginRight: '10px'
              }}>
                View Photos
              </button>
              <button style={{
                padding: '5px 10px',
                backgroundColor: 'transparent',
                color: '#2ecc71',
                border: '1px solid #2ecc71',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}>
                View Itinerary
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastTravels; 