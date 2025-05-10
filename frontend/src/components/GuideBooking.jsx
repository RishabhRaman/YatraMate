import React, { useState } from 'react';
import './GuideBooking.css';

const GuideBooking = () => {
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    travelers: 1,
    languages: [],
    specialRequests: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const guides = [
    {
      id: 1,
      name: 'Sophie Martin',
      location: 'Paris, France',
      languages: ['English', 'French', 'Spanish'],
      expertise: ['History', 'Architecture', 'Food & Wine'],
      rating: 4.9,
      reviews: 127,
      price: '€50/hour',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      name: 'Akira Tanaka',
      location: 'Tokyo, Japan',
      languages: ['English', 'Japanese'],
      expertise: ['Cultural Sites', 'Local Cuisine', 'Photography Spots'],
      rating: 4.8,
      reviews: 94,
      price: '¥5000/hour',
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      name: 'Elena Costa',
      location: 'Rome, Italy',
      languages: ['English', 'Italian', 'German'],
      expertise: ['Ancient History', 'Art', 'Hidden Gems'],
      rating: 4.7,
      reviews: 152,
      price: '€45/hour',
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 4,
      name: 'Carlos Rodriguez',
      location: 'Barcelona, Spain',
      languages: ['English', 'Spanish', 'Catalan'],
      expertise: ['Gaudi Architecture', 'Tapas Tours', 'Beach Activities'],
      rating: 4.9,
      reviews: 86,
      price: '€40/hour',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLanguageChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        languages: [...formData.languages, value],
      });
    } else {
      setFormData({
        ...formData,
        languages: formData.languages.filter((lang) => lang !== value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send data to your backend
    console.log('Booking form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="guide-booking-container">
      <div className="booking-header">
        <h1>Book Your Personal Travel Guide</h1>
        <p>Connect with experienced local guides who can provide personalized tours and insider knowledge</p>
      </div>

      <div className="booking-content">
        <div className="booking-form-container">
          <h2>Tell Us About Your Trip</h2>
          {submitted ? (
            <div className="booking-success">
              <div className="success-icon">✓</div>
              <h3>Thank you for your booking request!</h3>
              <p>We've received your information and will match you with the perfect guide. You will receive a confirmation email shortly.</p>
              <button onClick={() => setSubmitted(false)} className="new-booking-btn">Make Another Booking</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-group">
                <label htmlFor="destination">Destination</label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="Where are you traveling to?"
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="startDate">Start Date</label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="endDate">End Date</label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="travelers">Number of Travelers</label>
                <input
                  type="number"
                  id="travelers"
                  name="travelers"
                  min="1"
                  max="20"
                  value={formData.travelers}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Preferred Guide Languages</label>
                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="languages"
                      value="English"
                      onChange={handleLanguageChange}
                    />
                    English
                  </label>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="languages"
                      value="Spanish"
                      onChange={handleLanguageChange}
                    />
                    Spanish
                  </label>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="languages"
                      value="French"
                      onChange={handleLanguageChange}
                    />
                    French
                  </label>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="languages"
                      value="Italian"
                      onChange={handleLanguageChange}
                    />
                    Italian
                  </label>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="languages"
                      value="German"
                      onChange={handleLanguageChange}
                    />
                    German
                  </label>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="languages"
                      value="Japanese"
                      onChange={handleLanguageChange}
                    />
                    Japanese
                  </label>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="specialRequests">Special Requests or Interests</label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="Tell us about any specific sites you want to visit or special requirements"
                  rows="4"
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Find Your Guide</button>
            </form>
          )}
        </div>
        
        <div className="featured-guides">
          <h2>Featured Guides</h2>
          <div className="guides-grid">
            {guides.map((guide) => (
              <div key={guide.id} className="guide-card">
                <div className="guide-image-container">
                  <img src={guide.image} alt={guide.name} />
                  <div className="guide-rating">★ {guide.rating} ({guide.reviews})</div>
                </div>
                <div className="guide-info">
                  <h3>{guide.name}</h3>
                  <p className="guide-location">{guide.location}</p>
                  <div className="guide-languages">
                    {guide.languages.map((lang, index) => (
                      <span key={index} className="guide-tag">{lang}</span>
                    ))}
                  </div>
                  <div className="guide-expertise">
                    <p>Expertise:</p>
                    <div>
                      {guide.expertise.map((exp, index) => (
                        <span key={index} className="guide-tag expertise-tag">{exp}</span>
                      ))}
                    </div>
                  </div>
                  <div className="guide-footer">
                    <span className="guide-price">{guide.price}</span>
                    <button className="book-now-btn">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideBooking; 