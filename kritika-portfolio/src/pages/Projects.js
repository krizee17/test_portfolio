import React from 'react';
import SectionTitle from '../components/SectionTitle';
import EventCard from '../components/EventCard';
import data from '../data';

const C = {
  green: '#00ff8c',
  text: '#c0ffd4',
  textMuted: 'rgba(192,255,212,0.55)',
  card: 'rgba(0,255,140,0.04)',
  border: 'rgba(0,255,140,0.18)',
};

function Projects() {
  return (
    <section
      id="projects"
      style={{ minHeight: '100vh', padding: '100px 0 60px', position: 'relative' }}
    >
      <SectionTitle label="// COMMUNITY_WORK" title="Projects & Leadership" />

      {/* Community Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(0,255,140,0.07), rgba(0,191,255,0.04))',
        border: `1px solid ${C.green}`,
        borderRadius: 16,
        padding: 'clamp(20px, 4vw, 36px)',
        marginBottom: 48,
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: 28,
        alignItems: 'center',
      }}>
        {/* Trophy Badge */}
        <div style={{
          textAlign: 'center',
          minWidth: 110,
          background: 'rgba(0,255,140,0.07)',
          borderRadius: 12,
          padding: '18px 14px',
          border: '1px solid rgba(0,255,140,0.3)',
          order: 2,
        }}>
          <div style={{ fontSize: 36 }}>🏆</div>
          <div style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 10,
            color: C.green,
            fontWeight: 700,
            letterSpacing: 1,
            marginTop: 10,
            textTransform: 'uppercase',
            lineHeight: 1.5,
          }}>
            Community<br />of the Year
          </div>
          <div style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 22,
            color: '#e8fff4',
            fontWeight: 900,
            marginTop: 6,
          }}>
            2025
          </div>
        </div>

        {/* Community Info */}
        <div style={{ order: 1 }}>
          <div style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: 11,
            color: C.green,
            letterSpacing: 3,
            textTransform: 'uppercase',
            marginBottom: 8,
          }}>
            Community Role
          </div>
          <h3 style={{
            fontFamily: "'Orbitron', sans-serif",
            color: '#e8fff4',
            fontSize: 'clamp(18px, 3vw, 26px)',
            fontWeight: 700,
            marginBottom: 6,
          }}>
            {data.community.name}
          </h3>
          <div style={{ color: C.green, fontSize: 14, marginBottom: 14 }}>
            {data.community.role} — {data.community.college}
          </div>
          <p style={{
            color: C.textMuted,
            fontSize: 13,
            lineHeight: 1.8,
            maxWidth: 520,
          }}>
            {data.community.description}
          </p>
        </div>
      </div>

      {/* Events Grid */}
      <div style={{
        fontFamily: "'Orbitron', sans-serif",
        fontSize: 11,
        color: C.green,
        letterSpacing: 3,
        marginBottom: 18,
        textTransform: 'uppercase',
      }}>
        🚀 DevFest CyberYatra Events (7 organized)
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: 14,
        marginBottom: 40,
      }}>
        {data.community.events.map((event, i) => (
          <EventCard key={event.name} event={event} index={i} />
        ))}
      </div>

      {/* CCEP Highlight */}
      <div style={{
        background: 'rgba(0,191,255,0.04)',
        border: '1px solid rgba(0,191,255,0.25)',
        borderRadius: 12,
        padding: '24px 28px',
        display: 'flex',
        gap: 20,
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: 32,
      }}>
        <div style={{ fontSize: 42, flexShrink: 0 }}>🎓</div>
        <div>
          <div style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 13,
            color: '#00bfff',
            fontWeight: 700,
            marginBottom: 8,
          }}>
            Certified Cybersecurity Educator Professional (CCEP)
          </div>
          <p style={{ fontSize: 13, color: C.textMuted, lineHeight: 1.7 }}>
            An internationally recognized credential validating expertise in cybersecurity
            education and training — reflecting a commitment to both mastering and teaching
            the discipline. This certification positions Kritika at the forefront of
            cybersecurity education in Nepal.
          </p>
        </div>
      </div>

      {/* Additional Certs */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 14,
      }}>
        {data.certifications.slice(1).map((cert, i) => (
          <div
            key={i}
            style={{
              background: C.card,
              border: `1px solid ${C.border}`,
              borderRadius: 10,
              padding: '16px 18px',
              fontSize: 13,
              color: C.text,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = C.green;
              e.currentTarget.style.background = 'rgba(0,255,140,0.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = C.border;
              e.currentTarget.style.background = C.card;
            }}
          >
            <span style={{ color: C.green, fontSize: 16 }}>◆</span>
            {cert}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
