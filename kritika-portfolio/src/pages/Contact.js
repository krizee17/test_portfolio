import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import data from '../data';

const C = {
  green: '#00ff8c',
  text: '#c0ffd4',
  textMuted: 'rgba(192,255,212,0.55)',
  card: 'rgba(0,255,140,0.04)',
  border: 'rgba(0,255,140,0.18)',
};

const inputStyle = {
  width: '100%',
  background: 'rgba(0,255,140,0.04)',
  border: '1px solid rgba(0,255,140,0.18)',
  borderRadius: 8,
  padding: '12px 14px',
  color: '#c0ffd4',
  fontSize: 13,
  fontFamily: "'Share Tech Mono', monospace",
  outline: 'none',
  marginBottom: 14,
  transition: 'border-color 0.2s',
};

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the form data to a backend or email service
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  const contactItems = [
    { icon: '📧', label: 'Email', value: data.contact.email, href: `mailto:${data.contact.email}` },
    { icon: '📞', label: 'Phone', value: data.contact.phone, href: `tel:${data.contact.phone}` },
    { icon: '📍', label: 'Location', value: data.contact.location, href: null },
  ];

  return (
    <section
      id="contact"
      style={{ minHeight: '100vh', padding: '100px 0 60px', position: 'relative' }}
    >
      <SectionTitle label="// CONNECT" title="Get In Touch" />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 48,
        maxWidth: 900,
        margin: '0 auto',
      }}>
        {/* Left: Info */}
        <div>
          <p style={{
            color: C.textMuted,
            fontSize: 14,
            lineHeight: 1.9,
            marginBottom: 32,
          }}>
            Whether you're looking for a passionate cybersecurity collaborator,
            a driven intern, or simply want to connect — my inbox is always open.
            Let's build something secure together.
          </p>

          {contactItems.map(({ icon, label, value, href }) => (
            <div
              key={label}
              style={{
                display: 'flex',
                gap: 16,
                alignItems: 'center',
                marginBottom: 14,
                padding: '16px 18px',
                background: C.card,
                border: `1px solid ${C.border}`,
                borderRadius: 10,
                transition: 'border-color 0.2s',
                cursor: href ? 'pointer' : 'default',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.green)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
              onClick={() => { if (href) window.open(href, '_self'); }}
            >
              <span style={{ fontSize: 22, flexShrink: 0 }}>{icon}</span>
              <div>
                <div style={{
                  fontSize: 10,
                  color: C.textMuted,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  marginBottom: 4,
                  fontFamily: "'Orbitron', sans-serif",
                }}>
                  {label}
                </div>
                <div style={{ fontSize: 13, color: C.text }}>{value}</div>
              </div>
            </div>
          ))}

          {/* Status */}
          <div style={{
            marginTop: 24,
            padding: '14px 18px',
            background: 'rgba(0,255,140,0.06)',
            border: '1px solid rgba(0,255,140,0.25)',
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: '50%',
              background: C.green,
              display: 'inline-block',
              animation: 'pulse-ring 2s infinite',
            }} />
            <span style={{ fontSize: 12, color: C.green }}>
              Available for internships & collaborations
            </span>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div style={{
          background: C.card,
          border: `1px solid ${C.border}`,
          borderRadius: 14,
          padding: 28,
        }}>
          <div style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 11,
            color: C.green,
            letterSpacing: 2,
            marginBottom: 22,
            textTransform: 'uppercase',
          }}>
            Send a Message
          </div>

          {sent && (
            <div style={{
              padding: '12px 16px',
              background: 'rgba(0,255,140,0.1)',
              border: '1px solid rgba(0,255,140,0.4)',
              borderRadius: 8,
              color: C.green,
              fontSize: 13,
              marginBottom: 16,
              textAlign: 'center',
            }}>
              ✓ Message transmitted successfully!
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              style={{
                ...inputStyle,
                borderColor: focused === 'name' ? C.green : C.border,
              }}
              onFocus={() => setFocused('name')}
              onBlur={() => setFocused('')}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              style={{
                ...inputStyle,
                borderColor: focused === 'email' ? C.green : C.border,
              }}
              onFocus={() => setFocused('email')}
              onBlur={() => setFocused('')}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              style={{
                ...inputStyle,
                resize: 'vertical',
                borderColor: focused === 'message' ? C.green : C.border,
              }}
              onFocus={() => setFocused('message')}
              onBlur={() => setFocused('')}
            />
            <button
              type="submit"
              style={{
                width: '100%',
                fontFamily: "'Orbitron', sans-serif",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: 'uppercase',
                padding: '14px',
                background: C.green,
                color: '#030d08',
                border: 'none',
                borderRadius: 8,
                cursor: 'pointer',
                transition: 'opacity 0.2s, transform 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.85';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Transmit →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
