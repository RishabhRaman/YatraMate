import React, { useState, useEffect } from 'react';

const TypingText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(prev => prev + text[index]);
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="typing-text">{displayedText}</span>
  );
};

export default TypingText;
