import React from 'react';
import './HowItWorks.css';
import cimage1 from '../../images/cimage1.png';
import cimage2 from '../../images/cimage2.png';
import cimage3 from '../../images/cimage3.png';

const HowItWorks = () => {
  const steps = [
    {
      title: 'Tell Us What\'s In Your Mind',
      description: 'Share your travel preferences, destinations, and dates with us'
    },
    {
      title: 'Get Personalized Recommendations',
      description: 'We analyze your preferences and suggest tailored itineraries'
    },
    {
      title: 'Explore Popular Itineraries',
      description: 'Browse and discover popular travel plans from other users'
    }
  ];

  return (
    <div className="how-it-works">
      <div className="hiw-content">
        <h2 className="hiw-title">How It Works</h2>
        <div className="hiw-grid">
          {steps.map((step, index) => (
            <div key={index} className="hiw-card">
              {index === 0 && <img src={cimage1} alt="Chat with AI" className="hiw-image" />}
              {index === 1 && <img src={cimage2} alt="Personalized Recommendations" className="hiw-image" />}
              {index === 2 && <img src={cimage3} alt="Explore Popular Itineraries" className="hiw-image" />}
              <h3 className="hiw-title-card">{step.title}</h3>
              <p className="hiw-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
