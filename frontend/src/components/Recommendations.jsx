import React, { useEffect, useState } from 'react';
import { apiService } from '../services/apiService';

const Recommendations = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiService.getTripRecommendations()
      .then(setTrips)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading recommendations...</div>;
  if (error) return <div>Error: {error.message || error}</div>;

  return (
    <div className="recommendations">
      <h2>Recommended Trips</h2>
      <ul>
        {trips.map(trip => (
          <li key={trip.id}>{trip.destination} - {trip.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
