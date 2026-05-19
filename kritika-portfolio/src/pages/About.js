import React from 'react';
import SectionTitle from '../components/SectionTitle';
import data from '../data';

const C = {
  green: '#00ff8c',
  text: '#c0ffd4',
  textMuted: 'rgba(192,255,212,0.55)',
  card: 'rgba(0,255,140,0.04)',
  border: 'rgba(0,255,140,0.18)',
};

function About() {
  return (
    <section
      id="about"
      style={{ minHeight: '100vh', padding: '100px 0 60px', position: 'relative' }}
    >
      <SectionTitle label="// WHO_AM_I" title="About Me" />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 48,
        alignItems: 'start',
      }}>
        {/* Left: Avatar + Bio + Contact */}
        <div>
          <div style={{
            width: 160,
            height: 160,
            borderRadius: '50%',
            border: `2px solid ${C.green}`,
            background: 'rgba(0,255,140,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 44,
            fontWeight: 900,
            color: C.green,
            marginBottom: 28,
            animation: 'float 4s ease-in-out infinite',
            boxShadow: '0 0 40px rgba(0,255,140,0.1)',
          }}>
            KA
          </div>

          <p style={{
            lineHeight: 1.9,
            color: C.textMuted,
            fontSize: 14,
            marginBottom: 28,
          }}>
            {data.about}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { icon: '📍', value: data.contact.location },
              { icon: '📧', value: data.contact.email },
              { icon: '📞', value: data.contact.phone },
            ].map(({ icon, value }) => (
              <div
                key={value}
                style={{
                  display: 'flex',
                  gap: 12,
                  alignItems: 'center',
                  fontSize: 13,
                  color: C.text,
                  padding: '10px 14px',
                  background: C.card,
                  border: `1px solid ${C.border}`,
                  borderRadius: 8,
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.green)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
              >
                <span style={{ fontSize: 16 }}>{icon}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Education + Certifications */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {/* Education */}
          <div style={{
            background: C.card,
            border: `1px solid ${C.border}`,
            borderRadius: 12,
            padding: 24,
          }}>
            <div style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: 11,
              color: C.green,
              letterSpacing: 3,
              marginBottom: 20,
              textTransform: 'uppercase',
            }}>
              📚 Education
            </div>
            {data.education.map((edu, i) => (
              <div
                key={i}
                style={{
                  marginBottom: i < data.education.length - 1 ? 20 : 0,
                  paddingLeft: 14,
                  borderLeft: `2px solid ${i === 0 ? C.green : C.border}`,
                }}
              >
                <div style={{ fontWeight: 600, color: '#e8fff4', fontSize: 14 }}>
                  {edu.school}
                </div>
                <div style={{ color: C.textMuted, fontSize: 13, margin: '4px 0' }}>
                  {edu.degree}
                </div>
                <div style={{
                  color: C.green,
                  fontSize: 12,
                  fontFamily: "'Share Tech Mono', monospace",
                }}>
                  {edu.period}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div style={{
            background: C.card,
            border: `1px solid ${C.border}`,
            borderRadius: 12,
            padding: 24,
          }}>
            <div style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: 11,
              color: C.green,
              letterSpacing: 3,
              marginBottom: 20,
              textTransform: 'uppercase',
            }}>
              🏅 Certifications
            </div>
            {data.certifications.map((cert, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 10,
                  marginBottom: i < data.certifications.length - 1 ? 12 : 0,
                  fontSize: 13,
                  color: C.text,
                  lineHeight: 1.5,
                }}
              >
                <span style={{ color: C.green, fontSize: 10, marginTop: 4, flexShrink: 0 }}>◆</span>
                {cert}
              </div>
            ))}
          </div>

          {/* Quick Tags */}
          <div style={{
            background: C.card,
            border: `1px solid ${C.border}`,
            borderRadius: 12,
            padding: 20,
          }}>
            <div style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: 11,
              color: C.green,
              letterSpacing: 3,
              marginBottom: 14,
              textTransform: 'uppercase',
            }}>
              💡 Core Strengths
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {[
                'Team Leadership', 'Event Planning', 'Cybersecurity',
                'Volunteering', 'Problem Solving', 'Public Speaking',
                'Community Building', 'IT & Networking',
              ].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: 11,
                    color: C.green,
                    border: '1px solid rgba(0,255,140,0.3)',
                    borderRadius: 4,
                    padding: '4px 10px',
                    background: 'rgba(0,255,140,0.05)',
                    letterSpacing: 0.5,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
