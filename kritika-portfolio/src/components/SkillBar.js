import React, { useState, useEffect, useRef } from 'react';

function SkillBar({ name, level, delay = 0 }) {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ marginBottom: 18 }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 6,
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: 13,
      }}>
        <span style={{ color: '#c0ffd4' }}>{name}</span>
        <span style={{ color: '#00ff8c' }}>{level}%</span>
      </div>
      <div style={{
        height: 6,
        background: 'rgba(0,255,140,0.1)',
        borderRadius: 3,
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          width: animate ? `${level}%` : '0%',
          background: 'linear-gradient(90deg, #00ff8c, #00bfff)',
          borderRadius: 3,
          transition: `width 1.2s ease ${delay}ms`,
        }} />
      </div>
    </div>
  );
}

export default SkillBar;
