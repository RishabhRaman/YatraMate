import React, { useState } from 'react';
import './DestinationSearch.css';
import { apiService } from '../services/apiService';

const DestinationSearch = () => {
  const [destination, setDestination] = useState('');
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    setActivities([]);
    try {
      const results = await apiService.getActivityRecommendations(destination);
      setActivities(results);
    } catch (err) {
      setError(err.detail || 'Failed to fetch activities');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="destination-search">
      <div className="search-container">
        <input
          type="text"
          placeholder="Where would you like to go?"
          className="search-input"
          value={destination}
          onChange={e => setDestination(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch} disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>
      {error && <p className="error">{error}</p>}
      {activities.length > 0 && (
        <div className="activities-list">
          <h3>Recommended Activities</h3>
          <ul>
            {activities.map((act, idx) => (
              <li key={act.id || idx}>
                <strong>{act.name}</strong> - {act.category} - ${act.cost_estimate}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default DestinationSearch;
