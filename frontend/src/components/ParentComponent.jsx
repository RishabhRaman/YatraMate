import React, { useState } from 'react';
import ItineraryForm from './ItineraryForm';
import Chatbot from './Chatbot';

const ParentComponent = () => {
  // State to hold itinerary data obtained from ItineraryForm
  const [itineraryData, setItineraryData] = useState(null);

  // Handler passed as prop to ItineraryForm to receive generated itinerary text
  const handleItinerarySubmit = (data) => {
    setItineraryData(data);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Travel Itinerary Chatbot</h1>
      <ItineraryForm onSubmit={handleItinerarySubmit} />
      {/* Only show Chatbot if itineraryData is present */}
      {itineraryData && <Chatbot inputData={itineraryData} />}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 900,
    margin: '1rem auto',
    padding: '1rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  header: {
    textAlign: 'center',
    color: '#0077cc',
    marginBottom: 20,
  },
};

export default ParentComponent;


