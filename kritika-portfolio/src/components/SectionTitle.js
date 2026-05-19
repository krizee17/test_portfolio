import React from 'react';

function SectionTitle({ label, title }) {
  return (
    <div style={{ marginBottom: 48, textAlign: 'center' }}>
      <div style={{
        fontFamily: "'Share Tech Mono', monospace",
        color: '#00ff8c',
        fontSize: 12,
        letterSpacing: 4,
        textTransform: 'uppercase',
        marginBottom: 10,
      }}>
        {label}
      </div>
      <h2 style={{
        fontFamily: "'Orbitron', sans-serif",
        fontSize: 'clamp(24px, 5vw, 40px)',
        color: '#e8fff4',
        margin: 0,
        fontWeight: 700,
      }}>
        {title}
      </h2>
      <div style={{
        width: 60,
        height: 2,
        background: 'linear-gradient(90deg, transparent, #00ff8c, transparent)',
        margin: '16px auto 0',
      }} />
    </div>
  );
}

export default SectionTitle;
