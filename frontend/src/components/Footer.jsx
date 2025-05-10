import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Your trusted AI powered travel companion</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@aitravel.com</p>
        </div>
        <div className="footer-section">
          <h3>Connect with Us</h3>
          <div className="social-links">
            <a href="https://facebook.com/aitravel" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://x.com/aitravel" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-x"></i>
            </a>
            <a href="https://instagram.com/aitravel" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com/company/aitravel" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://youtube.com/aitravel" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
