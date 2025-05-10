import React from 'react';

const Notification = ({ message, type, onClose }) => {
  if (!message) return null;
  return (
    <div className={`notification ${type || ''}`.trim()} onClick={onClose}>
      {message}
      <span style={{ marginLeft: '1rem', cursor: 'pointer' }}>×</span>
    </div>
  );
};

export default Notification;
