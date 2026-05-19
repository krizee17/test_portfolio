import React from 'react';
import TypeWriter from '../components/TypeWriter';
import HexBackground from '../components/HexBackground';
import data from '../data';

function Home({ onNav }) {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        padding: '100px 0 60px',
      }}
    >
      <HexBackground />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Terminal prefix */}
        <div style={{
          fontFamily: "'Share Tech Mono', monospace",
          color: '#00ff8c',
          fontSize: 13,
          letterSpacing: 4,
          marginBottom: 20,
          opacity: 0.8,
        }}>
          &gt; INITIALIZING_PROFILE...
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: 'clamp(36px, 7vw, 72px)',
          fontWeight: 900,
          lineHeight: 1.1,
          color: '#e8fff4',
          marginBottom: 16,
          animation: 'fadeUp 0.7s ease both',
        }}>
          KRITIKA<br />
          <span style={{
            color: '#00ff8c',
            textShadow: '0 0 30px rgba(0,255,140,0.4)',
          }}>
            ADHIKARI
          </span>
        </h1>

        {/* Typewriter subtitle */}
        <div style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: 'clamp(13px, 2vw, 17px)',
          color: 'rgba(192,255,212,0.65)',
          marginBottom: 40,
          animation: 'fadeUp 0.7s ease 0.15s both',
          minHeight: 30,
        }}>
          <TypeWriter
            text="Cybersecurity Student • Community Leader • Ethical Hacker"
            speed={45}
          />
        </div>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: 16,
          flexWrap: 'wrap',
          animation: 'fadeUp 0.7s ease 0.3s both',
          marginBottom: 64,
        }}>
          <button
            onClick={() => onNav('Contact')}
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: 'uppercase',
              padding: '14px 28px',
              borderRadius: 6,
              background: '#00ff8c',
              color: '#030d08',
              border: 'none',
              cursor: 'pointer',
              animation: 'pulse-ring 2s infinite',
              transition: 'transform 0.2s, opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Get In Touch
          </button>
          <button
            onClick={() => onNav('Projects')}
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: 'uppercase',
              padding: '14px 28px',
              borderRadius: 6,
              background: 'transparent',
              color: '#00ff8c',
              border: '1px solid #00ff8c',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0,255,140,0.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            View Projects
          </button>
        </div>

        {/* Stats Row */}
        <div style={{
          display: 'flex',
          gap: 48,
          flexWrap: 'wrap',
          animation: 'fadeUp 0.7s ease 0.45s both',
          borderTop: '1px solid rgba(0,255,140,0.12)',
          paddingTop: 32,
        }}>
          {data.stats.map((stat) => (
            <div key={stat.label}>
              <div style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: 'clamp(22px, 4vw, 32px)',
                fontWeight: 900,
                color: '#00ff8c',
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: 11,
                color: 'rgba(192,255,212,0.55)',
                letterSpacing: 1,
                textTransform: 'uppercase',
                marginTop: 4,
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
