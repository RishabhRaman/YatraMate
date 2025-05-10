import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './UserDashboard.css';

const UserDashboard = () => {
  // Add useNavigate hook
  const navigate = useNavigate();
  
  // Get user data from localStorage
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;

  // Handler for Plan New Trip button
  const handleNewTrip = () => {
    navigate('/itineraryForm');
  };

  // Navigation handlers for each sidebar item
  const navigateTo = (path) => {
    navigate(path);
  };

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
        <h1 style={{ color: '#2c3e50', marginBottom: '20px' }}>Dashboard</h1>
        <p>Please log in to view your dashboard.</p>
        <Link to="/login" style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#3498db',
          color: 'white',
          borderRadius: '4px',
          textDecoration: 'none',
          marginTop: '20px'
        }}>
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="dashboard-sidebar">
        <div className="dashboard-logo">YatraMate</div>
        <nav>
          <ul>
            <li className="active" onClick={() => navigateTo('/dashboard')}>
              <i className="sidebar-icon fas fa-tachometer-alt"></i>
              Dashboard
            </li>
            <li onClick={() => navigateTo('/trips')}>
              <i className="sidebar-icon fas fa-suitcase"></i>
              My Trips
            </li>
            <li onClick={() => navigateTo('/past-travels')}>
              <i className="sidebar-icon fas fa-history"></i>
              Past Travels
            </li>
            <li onClick={() => navigateTo('/itineraryForm')}>
              <i className="sidebar-icon fas fa-calendar-alt"></i>
              Create Itinerary
            </li>
            <li onClick={() => navigateTo('/saved-places')}>
              <i className="sidebar-icon fas fa-heart"></i>
              Saved Places
            </li>
            <li onClick={() => navigateTo('/profile')}>
              <i className="sidebar-icon fas fa-cog"></i>
              Account Settings
            </li>
            <li onClick={() => navigateTo('/travel-budget')}>
              <i className="sidebar-icon fas fa-dollar-sign"></i>
              Travel Budget
            </li>
          </ul>
        </nav>
        
        <button className="dashboard-newchat" onClick={handleNewTrip}>
          <i className="fas fa-plus"></i> Plan New Trip
        </button>
        
        <div className="dashboard-user">
          <div className="user-avatar">
            {user.fullName ? user.fullName.charAt(0).toUpperCase() : 
             user.email ? user.email.charAt(0).toUpperCase() : 'U'}
          </div>
          <div className="user-info">
            <div className="user-name">{user.fullName || user.email.split('@')[0]}</div>
            <div className="user-status">{user.email}</div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="dashboard-main">
        <h1 className="dashboard-title">Dashboard</h1>
        <p className="dashboard-welcome">
          Welcome back, {user.fullName || user.email.split('@')[0]}! Here's an overview of your travel activities.
        </p>
        
        {/* Stats Section */}
        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-value">3</div>
            <div className="stat-label">Upcoming Trips</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">12</div>
            <div className="stat-label">Destinations Visited</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">5</div>
            <div className="stat-label">Saved Itineraries</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">8</div>
            <div className="stat-label">Travel Days</div>
          </div>
        </div>
        
        {/* Upcoming Trips Section */}
        <div className="dashboard-section" id="upcoming-trips">
          <div className="section-header">
            <h2>Upcoming Trips</h2>
            <button className="section-view-all" onClick={() => navigateTo('/trips')}>View All</button>
          </div>
          
          <div className="dashboard-cards">
            <div className="dashboard-card">
              <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Paris" />
              <span className="card-badge">Upcoming</span>
              <h3>Paris Adventure</h3>
              <p>20 July - 27 July, 2023</p>
              <button className="card-action" onClick={() => navigateTo('/trips/1')}>View Itinerary</button>
            </div>
            
            <div className="dashboard-card">
              <img src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1930&q=80" alt="Venice" />
              <span className="card-badge">Planning</span>
              <h3>Venice Getaway</h3>
              <p>15 August - 22 August, 2023</p>
              <button className="card-action" onClick={() => navigateTo('/itineraryForm?trip=2')}>Continue Planning</button>
            </div>
            
            <div className="dashboard-card">
              <img src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Swiss Alps" />
              <span className="card-badge">Upcoming</span>
              <h3>Swiss Alps</h3>
              <p>10 September - 17 September, 2023</p>
              <button className="card-action" onClick={() => navigateTo('/trips/3')}>View Itinerary</button>
            </div>
          </div>
        </div>
        
        {/* Recommended Destinations */}
        <div className="dashboard-section" id="recommendations">
          <div className="section-header">
            <h2>Recommended Destinations</h2>
            <button className="section-view-all" onClick={() => navigateTo('/recommendations')}>View All</button>
          </div>
          
          <div className="dashboard-cards inspiration-cards">
            <div className="dashboard-card">
              <img src="https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Maldives" />
              <span className="card-location">Maldives</span>
              <span className="card-rating">4.9 ★</span>
              <h3>Maldives Paradise</h3>
              <p>Perfect for a relaxing beach getaway</p>
              <button className="card-action" onClick={() => navigateTo('/explore?destination=maldives')}>Explore</button>
            </div>
            
            <div className="dashboard-card">
              <img src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Tokyo" />
              <span className="card-location">Tokyo</span>
              <span className="card-rating">4.8 ★</span>
              <h3>Tokyo City Exploration</h3>
              <p>Experience the blend of traditional and modern</p>
              <button className="card-action" onClick={() => navigateTo('/explore?destination=tokyo')}>Explore</button>
            </div>
            
            <div className="dashboard-card">
              <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Santorini" />
              <span className="card-location">Santorini</span>
              <span className="card-rating">4.7 ★</span>
              <h3>Santorini Island</h3>
              <p>Breathtaking views and unique architecture</p>
              <button className="card-action" onClick={() => navigateTo('/explore?destination=santorini')}>Explore</button>
            </div>
            
            <div className="dashboard-card">
              <img src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Bali" />
              <span className="card-location">Bali</span>
              <span className="card-rating">4.6 ★</span>
              <h3>Bali Adventure</h3>
              <p>Discover tropical paradise and cultural heritage</p>
              <button className="card-action" onClick={() => navigateTo('/explore?destination=bali')}>Explore</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;