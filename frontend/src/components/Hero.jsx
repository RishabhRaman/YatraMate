import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/itineraryForm');
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Plan Your Perfect Trip</h1>
        <p>Let AI help you create unforgettable travel experiences</p>
        <button className="cta-button" onClick={handleGetStarted}>Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
