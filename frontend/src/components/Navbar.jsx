import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  
  // Simple way to check if user is logged in
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;
  
  const handleLogoClick = () => {
    navigate('/');
  };
  
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo" onClick={handleLogoClick}>
          <h1>YatraMate</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="/recommendations" className="book-guide-btn">Recommendations</Link></li>
          <li><Link to="/trips" className="book-guide-btn">Trips</Link></li>
          <li><Link to="/explore" className="book-guide-btn">Explore</Link></li>
          <li><Link to="/guide-booking" className="book-guide-btn">Book Guide</Link></li>
        </ul>
        
        <div className="button-group">
          {user ? (
            <div className="profile-container">
              <div className="profile-icon" onClick={() => setShowMenu(!showMenu)}>
                {user.fullName ? user.fullName.charAt(0).toUpperCase() : 
                 user.email ? user.email.charAt(0).toUpperCase() : 'U'}
              </div>
              
              {showMenu && (
                <div className="profile-menu">
                  <div className="profile-header">
                    <p className="profile-name">
                      {user.fullName || (user.email ? user.email.split('@')[0] : 'User')}
                    </p>
                    <p className="profile-email">{user.email}</p>
                  </div>
                  <ul>
                    <li><Link to="/profile">My Profile</Link></li>
                    <li><Link to="/dashboard">{user.email}</Link></li>
                    <li><button onClick={handleLogout}>Logout</button></li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <>
              <button className="get-started-btn" onClick={() => navigate('/register')}>
                Register
              </button>
              <button className="login-btn" onClick={() => navigate('/login')}>
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
