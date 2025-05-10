import React from 'react';

const TravelBudget = () => {
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
        <h1 style={{ color: '#2c3e50', marginBottom: '20px' }}>Travel Budget</h1>
        <p>Please log in to manage your travel budget.</p>
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
      <h1 style={{ color: '#2c3e50', marginBottom: '30px' }}>Travel Budget</h1>
      
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#3498db', fontSize: '1.3rem', marginBottom: '15px' }}>Budget Overview</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '20px',
          marginTop: '20px'
        }}>
          <div style={{
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: '#f0fff4',
            border: '1px solid #d6ffef',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#2ecc71', marginBottom: '5px', fontSize: '1.2rem' }}>Total Budget</h3>
            <p style={{ color: '#2ecc71', fontSize: '1.8rem', fontWeight: 'bold' }}>₹50,000</p>
          </div>
          
          <div style={{
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: '#fff9f0',
            border: '1px solid #ffecd6',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#f39c12', marginBottom: '5px', fontSize: '1.2rem' }}>Spent</h3>
            <p style={{ color: '#f39c12', fontSize: '1.8rem', fontWeight: 'bold' }}>₹15,000</p>
          </div>
          
          <div style={{
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: '#f1f9ff',
            border: '1px solid #d6eeff',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#3498db', marginBottom: '5px', fontSize: '1.2rem' }}>Remaining</h3>
            <p style={{ color: '#3498db', fontSize: '1.8rem', fontWeight: 'bold' }}>₹35,000</p>
          </div>
        </div>
      </div>
      
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#3498db', fontSize: '1.3rem', marginBottom: '15px' }}>Upcoming Trips Budget</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e9ecef' }}>
              <th style={{ padding: '10px', textAlign: 'left' }}>Trip</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Date</th>
              <th style={{ padding: '10px', textAlign: 'right' }}>Budget</th>
              <th style={{ padding: '10px', textAlign: 'right' }}>Spent</th>
              <th style={{ padding: '10px', textAlign: 'right' }}>Remaining</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #e9ecef' }}>
              <td style={{ padding: '10px' }}>Paris Adventure</td>
              <td style={{ padding: '10px' }}>Jul 20 - Jul 27, 2023</td>
              <td style={{ padding: '10px', textAlign: 'right' }}>₹30,000</td>
              <td style={{ padding: '10px', textAlign: 'right' }}>₹10,000</td>
              <td style={{ padding: '10px', textAlign: 'right' }}>₹20,000</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e9ecef' }}>
              <td style={{ padding: '10px' }}>Venice Getaway</td>
              <td style={{ padding: '10px' }}>Aug 15 - Aug 22, 2023</td>
              <td style={{ padding: '10px', textAlign: 'right' }}>₹25,000</td>
              <td style={{ padding: '10px', textAlign: 'right' }}>₹5,000</td>
              <td style={{ padding: '10px', textAlign: 'right' }}>₹20,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <button style={{
          padding: '10px 20px',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1rem'
        }}>
          Add New Budget
        </button>
      </div>
    </div>
  );
};

export default TravelBudget; 