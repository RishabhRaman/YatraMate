import React, { useState } from 'react';
import { useUser } from '../contexts/UserContext';

const ProfileEdit = () => {
  const { user, updateUserProfile } = useUser();
  const [fullName, setFullName] = useState(user?.full_name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      await updateUserProfile({ full_name: fullName, email, password });
      setSuccess(true);
      setPassword('');
    } catch (err) {
      setError(err.detail || 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="profile-edit-form" onSubmit={handleSubmit}>
      <h2>Edit Profile</h2>
      <input type="text" placeholder="Full Name" value={fullName} onChange={e => setFullName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="New Password (optional)" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit" disabled={loading}>{loading ? 'Saving...' : 'Save Changes'}</button>
      {success && <p className="success">Profile updated!</p>}
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default ProfileEdit;
