import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { apiService } from '../services/apiService';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      console.log('Login attempt with:', email);
      const data = await apiService.login(email, password);
      
      // Store user data in localStorage
      const userData = {
        email: email,
        ...data
      };
      
      localStorage.setItem('user', JSON.stringify(userData));
      
      // Navigate to dashboard
      navigate('/dashboard');
    } catch (err) {
      console.error('Login error:', err);
      setError('Login failed. Please check your email and password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email"
              placeholder="Enter your email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
              placeholder="Enter your password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              required 
            />
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="remember-me">
              <input 
                type="checkbox" 
                id="rememberMe"
                checked={rememberMe}
                onChange={e => setRememberMe(e.target.checked)}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            
            <div className="forgot-password">
              <a href="#">Forgot password?</a>
            </div>
          </div>
          
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'Logging in...' : 'Log In'}
          </button>
          
          {error && <p className="error">{error}</p>}
          
          <div className="register-link">
            <p>Don't have an account? <Link to="/register">Sign up</Link></p>
          </div>
          
          <div className="social-login">
            <div className="social-login-title">Or continue with</div>
            <div className="social-buttons">
              <button type="button" className="social-button" onClick={() => alert('Google login not implemented yet')}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107" />
                  <path d="M3.15295 7.3455L6.43845 9.755C7.32745 7.554 9.48045 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15895 2 4.82795 4.1685 3.15295 7.3455Z" fill="#FF3D00" />
                  <path d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5718 17.5742 13.3038 18.001 12 18C9.39904 18 7.19053 16.3415 6.35853 14.027L3.09753 16.5395C4.75253 19.778 8.11353 22 12 22Z" fill="#4CAF50" />
                  <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2" />
                </svg>
              </button>
              <button type="button" className="social-button" onClick={() => alert('Facebook login not implemented yet')}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="#1877F2" />
                </svg>
              </button>
              <button type="button" className="social-button" onClick={() => alert('Apple login not implemented yet')}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.8992 12.0004C16.8992 10.8294 17.5692 9.8194 18.8382 9.0894C18.1342 8.0894 17.0582 7.4994 15.6292 7.2994C14.2992 7.1094 12.8482 7.9394 12.1732 7.9394C11.4372 7.9394 10.1572 7.3394 9.09619 7.3394C6.99619 7.3794 4.80719 8.9794 4.80719 12.2494C4.80719 13.3194 5.02719 14.4194 5.46719 15.5394C6.06719 17.0194 7.89619 20.9994 9.81719 20.9394C10.8572 20.9094 11.5992 20.2194 12.9082 20.2194C14.1882 20.2194 14.8792 20.9394 16.0382 20.9394C17.9782 20.8994 19.6182 17.2794 20.1782 15.7994C17.6982 14.5894 16.8992 12.3194 16.8992 12.0004Z" fill="black" />
                  <path d="M14.8499 5.75937C15.5759 4.88937 15.5759 3.03937 14.8499 2.16937C14.0139 2.91937 13.1379 3.78937 12.7779 4.75937C13.5539 5.50937 14.3299 6.37937 14.8499 5.75937Z" fill="black" />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
