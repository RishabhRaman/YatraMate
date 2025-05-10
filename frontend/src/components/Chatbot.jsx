import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Chatbot = ({ inputData }) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Effect to send data to Gemini API when inputData changes
  useEffect(() => {
    if (!inputData) {
      setResponse(null);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
        if (!apiKey) {
          throw new Error('Missing Gemini API key in environment variables');
        }

        // Example: POST request to Gemini API endpoint with inputData
        const res = await fetch('http://localhost:3000/api/gemini/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
          body: JSON.stringify({ data: inputData }),
        });

        if (!res.ok) {
          throw new Error(`API error: ${res.status} ${res.statusText}`);
        }

        const json = await res.json();
        // Assuming response contains a message field with chatbot reply
        setResponse(json.message || JSON.stringify(json));
      } catch (err) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [inputData]);

  return (
    <div style={styles.container} role="region" aria-live="polite">
      <h2 style={styles.title}>Chatbot Response</h2>
      {loading && <p style={styles.loading}>Loading response from Gemini...</p>}
      {error && <p style={styles.error}>Error: {error}</p>}
      {!loading && !error && response && (
        <div style={styles.responseBox}>
          <p style={styles.responseText}>{response}</p>
        </div>
      )}
      {!loading && !error && !response && (
        <p style={styles.placeholder}>Enter an itinerary to get a response.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 600,
    margin: '1rem auto',
    padding: '1rem',
    backgroundColor: '#f7f9fc',
    borderRadius: 8,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
    minHeight: 150,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    marginBottom: '0.5rem',
    fontSize: '1.5rem',
    color: '#0077cc',
  },
  loading: {
    fontStyle: 'italic',
    color: '#666',
  },
  error: {
    color: '#cc0000',
    fontWeight: 'bold',
  },
  responseBox: {
    backgroundColor: '#e1f3ff',
    padding: '1rem',
    borderRadius: 6,
    marginTop: '0.5rem',
    whiteSpace: 'pre-wrap',
    flexGrow: 1,
    overflowY: 'auto',
  },
  responseText: {
    fontSize: '1.1rem',
    lineHeight: 1.4,
  },
  placeholder: {
    color: '#999',
    fontStyle: 'italic',
  },
};

Chatbot.propTypes = {
  inputData: PropTypes.string.isRequired,
};

export default Chatbot;
