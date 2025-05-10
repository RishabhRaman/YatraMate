import React, { useEffect, useState } from 'react';
import { apiService } from '../services/apiService';

const Schedule = ({ tripId }) => {
  const [schedule, setSchedule] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!tripId) return;
    apiService.optimizeSchedule(tripId)
      .then(setSchedule)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [tripId]);

  if (loading) return <div>Loading schedule...</div>;
  if (error) return <div>Error: {error.message || error}</div>;
  if (!schedule) return <div>No schedule data.</div>;

  return (
    <div className="schedule">
      <h2>Optimized Schedule</h2>
      <pre>{JSON.stringify(schedule, null, 2)}</pre>
    </div>
  );
};

export default Schedule;
