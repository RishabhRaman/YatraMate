import React, { useEffect, useState } from 'react';
import { apiService } from '../services/apiService';

const TripList = ({ onSelectTrip }) => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchTrips = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await apiService.getTrips();
      setTrips(data);
    } catch (err) {
      setError(err.detail || 'Failed to fetch trips');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  const handleDelete = async (tripId) => {
    if (!window.confirm('Are you sure you want to delete this trip?')) return;
    try {
      await apiService.deleteTrip(tripId);
      fetchTrips();
    } catch (err) {
      alert(err.detail || 'Failed to delete trip');
    }
  };

  return (
    <div className="trip-list">
      <h2>Your Trips</h2>
      {loading && <div>Loading...</div>}
      {error && <div className="error">{error}</div>}
      <ul>
        {trips.map(trip => (
          <li key={trip.id}>
            <a href={`/trips/${trip.id}`} style={{ textDecoration: 'none', color: '#2c3e50' }}>
              {trip.destination} ({trip.start_date} - {trip.end_date})
            </a>
            <button onClick={() => handleDelete(trip.id)} style={{ marginLeft: '1rem' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TripList;
