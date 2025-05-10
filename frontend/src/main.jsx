import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import { BrowserRouter as Router } from 'react-router-dom';

// Clear localStorage if there might be corrupt data
try {
  // Check if user data exists and is valid JSON
  const userData = localStorage.getItem('user');
  if (userData) {
    try {
      JSON.parse(userData);
    } catch (e) {
      // If JSON parsing fails, clear localStorage
      console.warn('Found corrupt user data in localStorage, clearing...', e);
      localStorage.clear();
    }
  }
} catch (e) {
  console.error('Error accessing localStorage:', e);
}

// Error handler for React 18
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React error boundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '50px', margin: '100px auto', maxWidth: '600px', textAlign: 'center' }}>
          <h1>Something went wrong</h1>
          <p>The application encountered an error. Please try refreshing the page.</p>
          <pre style={{ textAlign: 'left', background: '#f5f5f5', padding: '20px', borderRadius: '5px', overflow: 'auto' }}>
            {this.state.error?.message || "Unknown error"}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}

try {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <ErrorBoundary>
      <Router>
        <App />
      </Router>
    </ErrorBoundary>
  );
} catch (error) {
  console.error("Error rendering React application:", error);
  document.getElementById('root').innerHTML = `
    <div style="padding: 50px; margin: 100px auto; max-width: 600px; text-align: center;">
      <h1>Failed to start application</h1>
      <p>There was a critical error starting the application. Please try again later.</p>
      <pre style="text-align: left; background: #f5f5f5; padding: 20px; border-radius: 5px; overflow: auto;">
        ${error.message}
      </pre>
    </div>
  `;
}
