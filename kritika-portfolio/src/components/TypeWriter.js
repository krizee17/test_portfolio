import React, { useState, useEffect } from 'react';

function TypeWriter({ text, speed = 50 }) {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex((i) => i + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return (
    <span>
      {displayed}
      <span style={{ animation: 'blink 1s step-end infinite', color: '#00ff8c' }}>
        ▌
      </span>
    </span>
  );
}

export default TypeWriter;
