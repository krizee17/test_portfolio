import React, { useState } from 'react';

function EventCard({ event, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(0,255,140,0.07)' : 'rgba(0,255,140,0.03)',
        border: `1px solid ${hovered ? 'rgba(0,255,140,0.5)' : 'rgba(0,255,140,0.15)'}`,
        borderRadius: 12,
        padding: '20px 18px',
        transition: 'all 0.3s ease',
        animation: `fadeUp 0.5s ease ${index * 80}ms both`,
        cursor: 'default',
        transform: hovered ? 'translateY(-4px)' : 'none',
      }}
    >
      <div style={{ fontSize: 28, marginBottom: 10 }}>{event.icon}</div>
      <div style={{
        fontFamily: "'Orbitron', sans-serif",
        fontSize: 12,
        color: '#00ff8c',
        fontWeight: 600,
        marginBottom: 6,
        lineHeight: 1.4,
      }}>
        {event.name}
      </div>
      <div style={{
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: 12,
        color: 'rgba(192,255,212,0.7)',
        lineHeight: 1.5,
      }}>
        {event.desc}
      </div>
    </div>
  );
}

export default EventCard;
