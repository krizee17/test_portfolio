import React from 'react';

function HexBackground() {
  return (
    <svg
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.045,
        pointerEvents: 'none',
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="hexPattern"
          x="0" y="0"
          width="60" height="52"
          patternUnits="userSpaceOnUse"
        >
          <polygon
            points="30,2 58,17 58,47 30,62 2,47 2,17"
            fill="none"
            stroke="#00ff8c"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexPattern)" />
    </svg>
  );
}

export default HexBackground;
