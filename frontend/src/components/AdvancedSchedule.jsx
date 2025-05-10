import React, { useState } from 'react';
import { apiService } from '../services/apiService';

const AdvancedSchedule = () => {
  const [tripId, setTripId] = useState('');
  const [result, setResult] = useState(null);
  const [conflicts, setConflicts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleOptimize = async () => {
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const data = await apiService.optimizeSchedule(tripId);
      setResult(data);
    } catch (err) {
      setError(err.detail || 'Failed to optimize schedule');
    } finally {
      setLoading(false);
    }
  };

  const handleCheckConflicts = async () => {
    setLoading(true);
    setError('');
    setConflicts(null);
    try {
      const data = await apiService.getScheduleConflicts(tripId);
      setConflicts(data);
    } catch (err) {
      setError(err.detail || 'Failed to check conflicts');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="advanced-schedule">
      <h2>Advanced Scheduling</h2>
      <input
        type="text"
        placeholder="Trip ID"
        value={tripId}
        onChange={e => setTripId(e.target.value)}
      />
      <button onClick={handleOptimize} disabled={loading}>Optimize Schedule</button>
      <button onClick={handleCheckConflicts} disabled={loading}>Check Conflicts</button>
      {loading && <div>Loading...</div>}
      {error && <div className="error">{error}</div>}
      {result && (
        <div>
          <h3>Optimized Schedule</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
      {conflicts && (
        <div>
          <h3>Schedule Conflicts</h3>
          <pre>{JSON.stringify(conflicts, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default AdvancedSchedule;
