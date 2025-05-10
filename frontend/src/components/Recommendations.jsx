import React, { useState } from 'react';
import '../styles/Recommendations.css';

// Mock data for recommendations
const MOCK_RECOMMENDATIONS = [
  {
    id: 1,
    destination: 'Bali, Indonesia',
    description: 'Island paradise with pristine beaches, lush landscapes, and spiritual retreats',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&h=500',
    rating: 4.8,
    tags: ['Beach', 'Nature', 'Cultural'],
    price: '₹89,500'
  },
  {
    id: 2,
    destination: 'Kyoto, Japan',
    description: 'Ancient temples, traditional tea houses, and breathtaking cherry blossom seasons',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&h=500',
    rating: 4.7,
    tags: ['Historical', 'Cultural', 'Food'],
    price: '₹1,24,800'
  },
  {
    id: 3,
    destination: 'Santorini, Greece',
    description: 'Iconic white buildings with blue domes overlooking the crystal-clear Aegean Sea',
    image: 'https://images.unsplash.com/photo-1469796466635-455ede028aca?auto=format&fit=crop&w=800&h=500',
    rating: 4.9,
    tags: ['Beach', 'Romantic', 'Luxury'],
    price: '₹1,49,900'
  },
  {
    id: 4,
    destination: 'Marrakech, Morocco',
    description: 'Vibrant markets, stunning palaces, and rich cultural heritage in this historic city',
    image: 'https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?auto=format&fit=crop&w=800&h=500',
    rating: 4.6,
    tags: ['Cultural', 'Shopping', 'Historical'],
    price: '₹78,900'
  },
  {
    id: 5,
    destination: 'Queenstown, New Zealand',
    description: 'Adventure capital with breathtaking mountain scenery and outdoor activities',
    image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=800&h=500',
    rating: 4.8,
    tags: ['Adventure', 'Nature', 'Outdoor'],
    price: '₹1,32,500'
  },
  {
    id: 6,
    destination: 'Prague, Czech Republic',
    description: 'Fairytale city with Gothic architecture, charming streets, and rich history',
    image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=800&h=500',
    rating: 4.7,
    tags: ['Historical', 'Cultural', 'Architecture'],
    price: '₹92,000'
  }
];

// Filter options
const FILTERS = {
  categories: ['Beach', 'Nature', 'Cultural', 'Historical', 'Adventure', 'Romantic', 'Food', 'Architecture'],
  priceRanges: ['Under ₹80,000', '₹80,000 - ₹1,00,000', '₹1,00,000 - ₹1,50,000', 'Over ₹1,50,000']
};

const Recommendations = () => {
  const [activeFilters, setActiveFilters] = useState([]);
  const [activePriceFilter, setActivePriceFilter] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter recommendations based on active filters and search term
  const filteredRecommendations = MOCK_RECOMMENDATIONS.filter(rec => {
    const matchesSearch = rec.destination.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         rec.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilters = activeFilters.length === 0 || 
                           activeFilters.some(filter => rec.tags.includes(filter));
    
    let matchesPrice = true;
    if (activePriceFilter) {
      // Remove ₹ and commas for comparison
      const price = parseInt(rec.price.replace('₹', '').replace(/,/g, ''));
      
      if (activePriceFilter === 'Under ₹80,000' && price >= 80000) matchesPrice = false;
      if (activePriceFilter === '₹80,000 - ₹1,00,000' && (price < 80000 || price > 100000)) matchesPrice = false;
      if (activePriceFilter === '₹1,00,000 - ₹1,50,000' && (price < 100000 || price > 150000)) matchesPrice = false;
      if (activePriceFilter === 'Over ₹1,50,000' && price <= 150000) matchesPrice = false;
    }
    
    return matchesSearch && matchesFilters && matchesPrice;
  });
  
  const toggleFilter = (filter) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter(f => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };
  
  const togglePriceFilter = (priceFilter) => {
    if (activePriceFilter === priceFilter) {
      setActivePriceFilter(null);
    } else {
      setActivePriceFilter(priceFilter);
    }
  };

  return (
    <div className="recommendations-page">
      <div className="recommendations-header">
        <h1>Travel Destinations For You</h1>
        <p>Discover amazing places recommended by our travel experts and fellow travelers</p>
        
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search destinations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div className="recommendations-container">
        <div className="filters-panel">
          <h3>Filter By:</h3>
          
          <div className="filter-section">
            <h4>Categories</h4>
            <div className="filter-options">
              {FILTERS.categories.map(category => (
                <div 
                  key={category}
                  className={`filter-tag ${activeFilters.includes(category) ? 'active' : ''}`}
                  onClick={() => toggleFilter(category)}
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
          
          <div className="filter-section">
            <h4>Price Range</h4>
            <div className="filter-options">
              {FILTERS.priceRanges.map(range => (
                <div 
                  key={range}
                  className={`filter-tag ${activePriceFilter === range ? 'active' : ''}`}
                  onClick={() => togglePriceFilter(range)}
                >
                  {range}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="recommendations-grid">
          {filteredRecommendations.length > 0 ? (
            filteredRecommendations.map(recommendation => (
              <div className="recommendation-card" key={recommendation.id}>
                <div className="recommendation-image">
                  <img src={recommendation.image} alt={recommendation.destination} />
                  <div className="recommendation-price">{recommendation.price}</div>
                </div>
                <div className="recommendation-content">
                  <h3>{recommendation.destination}</h3>
                  <div className="recommendation-rating">
                    <span className="stars">{'★'.repeat(Math.floor(recommendation.rating))}</span>
                    <span className="rating-number">{recommendation.rating}</span>
                  </div>
                  <p>{recommendation.description}</p>
                  <div className="recommendation-tags">
                    {recommendation.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <button className="view-details-btn">View Details</button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <h3>No destinations found</h3>
              <p>Try adjusting your filters or search term</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
