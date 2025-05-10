import React, { useState } from 'react';

const ActivityForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [costEstimate, setCostEstimate] = useState('');
  const [transportationCost, setTransportationCost] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!name || !category) {
      setError('Name and category are required');
      return;
    }
    onAdd({
      name,
      category,
      cost_estimate: Number(costEstimate),
      transportation_cost: Number(transportationCost)
    });
    setName('');
    setCategory('');
    setCostEstimate('');
    setTransportationCost('');
  };

  return (
    <form className="activity-form" onSubmit={handleSubmit}>
      <h4>Add Activity</h4>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
      <input type="text" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} required />
      <input type="number" placeholder="Cost Estimate" value={costEstimate} onChange={e => setCostEstimate(e.target.value)} />
      <input type="number" placeholder="Transportation Cost" value={transportationCost} onChange={e => setTransportationCost(e.target.value)} />
      <button type="submit">Add</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default ActivityForm;
