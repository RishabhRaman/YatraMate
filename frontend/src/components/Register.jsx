import React, { useState } from 'react';
import { apiService } from '../services/apiService';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = ({ onRegister }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate password match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Validate terms acceptance
    if (!acceptTerms) {
      setError('Please accept the terms and conditions');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      await apiService.register(fullName, email, password);
      setSuccess(true);
      if (onRegister) onRegister();
    } catch (err) {
      console.error('Registration error details:', err);
      if (err.response?.data?.detail) {
        setError(err.response.data.detail);
      } else if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        setError('Registration failed. Please check your inputs and try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Create Your Account</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              placeholder="Enter your full name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Create a password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm your password"
            />
          </div>

          <button type="submit" className="register-btn" disabled={loading || !acceptTerms}>
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>

          <div className="terms-checkbox">
            <input 
              type="checkbox" 
              id="termsCheckbox"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              required
            />
            <label htmlFor="termsCheckbox">
              By continuing, you agree to YaatraMate's Terms of Service and acknowledge you've read our Privacy Policy.
            </label>
          </div>

          {success && (
            <div className="success-message">
              <p>Account created successfully!</p>
              <p>You can now login to start planning your trips.</p>
            </div>
          )}

          {error && (
            <div className="error-message">
              {error}
              <p className="error-details">Please ensure:</p>
              <ul className="error-list">
                <li>Your email is valid and not already registered</li>
                <li>Your password is strong enough</li>
                <li>You have accepted the terms and conditions</li>
              </ul>
            </div>
          )}
          <div className="login-link">
            <p>Already have an account? <Link to="/login">Log in</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
