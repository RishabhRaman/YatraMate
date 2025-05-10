import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiService } from '../services/apiService';
import ActivityForm from './ActivityForm';

const TripDetail = () => {
  const { tripId } = useParams();
  const [trip, setTrip] = useState(null);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [notif, setNotif] = useState('');

  const fetchTrip = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await apiService.getTrip(tripId);
      setTrip(data);
      const acts = await apiService.getActivities(tripId);
      setActivities(acts);
    } catch (err) {
      setError(err.detail || 'Failed to fetch trip details');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrip();
    // eslint-disable-next-line
  }, [tripId]);

  const handleAddActivity = async (activityData) => {
    try {
      await apiService.createActivity(tripId, activityData);
      setNotif('Activity added!');
      fetchTrip();
    } catch (err) {
      setNotif(err.detail || 'Failed to add activity');
    }
  };

  const handleDeleteActivity = async (activityId) => {
    if (!window.confirm('Delete this activity?')) return;
    try {
      await apiService.deleteActivity(tripId, activityId);
      setNotif('Activity deleted!');
      fetchTrip();
    } catch (err) {
      setNotif(err.detail || 'Failed to delete activity');
    }
  };

  return (
    <div className="trip-detail">
      {notif && <div className="notification">{notif}</div>}
      {loading && <div>Loading...</div>}
      {error && <div className="error">{error}</div>}
      {trip && (
        <>
          <h2>{trip.destination}</h2>
          <p>{trip.description}</p>
          <p>
            <strong>Dates:</strong> {trip.start_date} - {trip.end_date}
          </p>
          <h3>Activities</h3>
          <ul>
            {activities.map(act => (
              <li key={act.id}>
                <strong>{act.name}</strong> ({act.category}) - ${act.cost_estimate}
                <button onClick={() => handleDeleteActivity(act.id)} style={{ marginLeft: '1rem' }}>Delete</button>
              </li>
            ))}
          </ul>
          <ActivityForm onAdd={handleAddActivity} />
        </>
      )}
    </div>
  );
};

export default TripDetail;
