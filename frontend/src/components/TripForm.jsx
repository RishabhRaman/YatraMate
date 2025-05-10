import React, { useState } from 'react';
import { apiService } from '../services/apiService';

const TripForm = ({ onSuccess }) => {
  const [destination, setDestination] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      await apiService.createTrip({ destination, description, start_date: startDate, end_date: endDate });
      setSuccess(true);
      setDestination('');
      setDescription('');
      setStartDate('');
      setEndDate('');
      if (onSuccess) onSuccess();
    } catch (err) {
      setError(err.detail || 'Failed to create trip');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="trip-form" onSubmit={handleSubmit}>
      <h2>Create New Trip</h2>
      <input type="text" placeholder="Destination" value={destination} onChange={e => setDestination(e.target.value)} required />
      <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
      <input type="date" placeholder="Start Date" value={startDate} onChange={e => setStartDate(e.target.value)} required />
      <input type="date" placeholder="End Date" value={endDate} onChange={e => setEndDate(e.target.value)} required />
      <button type="submit" disabled={loading}>{loading ? 'Creating...' : 'Create Trip'}</button>
      {success && <p className="success">Trip created successfully!</p>}
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default TripForm;
