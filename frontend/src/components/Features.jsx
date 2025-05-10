import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      <div className="feature-card">
        <h2>Personalized Recommendations</h2>
        <p>Get tailored suggestions based on your preferences</p>
      </div>
      <div className="feature-card">
        <h2>Smart Scheduling</h2>
        <p>Optimal itinerary planning for your trip</p>
      </div>
      <div className="feature-card">
        <h2>AI-Powered Insights</h2>
        <p>Discover hidden gems and local favorites</p>
      </div>
    </section>
  );
};

export default Features;
