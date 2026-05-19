import React from 'react';
import SectionTitle from '../components/SectionTitle';
import SkillBar from '../components/SkillBar';
import data from '../data';

const C = {
  green: '#00ff8c',
  text: '#c0ffd4',
  textMuted: 'rgba(192,255,212,0.55)',
  card: 'rgba(0,255,140,0.04)',
  border: 'rgba(0,255,140,0.18)',
};

function Skills() {
  return (
    <section
      id="skills"
      style={{ minHeight: '100vh', padding: '100px 0 60px', position: 'relative' }}
    >
      <SectionTitle label="// CAPABILITIES" title="Skills & Expertise" />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 48,
      }}>
        {/* Skill Bars */}
        <div>
          <div style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 11,
            color: C.green,
            letterSpacing: 3,
            marginBottom: 24,
            textTransform: 'uppercase',
          }}>
            Technical &amp; Soft Skills
          </div>
          {data.skills.map((skill, i) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              delay={i * 100}
            />
          ))}
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Interests Grid */}
          <div>
            <div style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: 11,
              color: C.green,
              letterSpacing: 3,
              marginBottom: 16,
              textTransform: 'uppercase',
            }}>
              Areas of Interest
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 10,
            }}>
              {data.interests.map(({ icon, label }) => (
                <div
                  key={label}
                  style={{
                    background: C.card,
                    border: `1px solid ${C.border}`,
                    borderRadius: 8,
                    padding: '12px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    fontSize: 12,
                    color: C.text,
                    cursor: 'default',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = C.green;
                    e.currentTarget.style.background = 'rgba(0,255,140,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = C.border;
                    e.currentTarget.style.background = C.card;
                  }}
                >
                  <span style={{ fontSize: 18 }}>{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Card */}
          <div style={{
            background: C.card,
            border: `1px solid ${C.border}`,
            borderRadius: 12,
            padding: 22,
          }}>
            <div style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: 11,
              color: C.green,
              letterSpacing: 3,
              marginBottom: 14,
              textTransform: 'uppercase',
            }}>
              💼 Professional Experience
            </div>
            <div style={{ fontSize: 15, color: '#e8fff4', marginBottom: 4, fontWeight: 600 }}>
              {data.experience.role}
            </div>
            <div style={{ fontSize: 13, color: C.green, marginBottom: 16 }}>
              {data.experience.org} — {data.experience.location}
            </div>
            {data.experience.points.map((point, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: 10,
                  fontSize: 13,
                  color: C.textMuted,
                  marginBottom: 10,
                  lineHeight: 1.6,
                  alignItems: 'flex-start',
                }}
              >
                <span style={{ color: C.green, flexShrink: 0, marginTop: 2 }}>›</span>
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
