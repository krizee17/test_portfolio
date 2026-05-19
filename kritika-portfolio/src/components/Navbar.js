import React, { useState, useEffect } from 'react';

const NAV_LINKS = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

function Navbar({ active, onNav }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (item) => {
    setMenuOpen(false);
    onNav(item);
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      padding: '16px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled ? 'rgba(3,13,8,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0,255,140,0.18)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      {/* Logo */}
      <div style={{
        fontFamily: "'Orbitron', sans-serif",
        fontWeight: 900,
        fontSize: 17,
        color: '#00ff8c',
        letterSpacing: 2,
        userSelect: 'none',
      }}>
        KA<span style={{ color: '#c0ffd4' }}>.exe</span>
      </div>

      {/* Desktop Links */}
      <div style={{ display: 'flex', gap: 32 }} className="nav-links">
        {NAV_LINKS.map((item) => (
          <button
            key={item}
            onClick={() => handleNav(item)}
            style={{
              background: 'none',
              border: 'none',
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: 13,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: active === item ? '#00ff8c' : 'rgba(192,255,212,0.55)',
              borderBottom: active === item
                ? '1px solid #00ff8c'
                : '1px solid transparent',
              paddingBottom: 2,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              if (active !== item) e.target.style.color = '#c0ffd4';
            }}
            onMouseLeave={(e) => {
              if (active !== item) e.target.style.color = 'rgba(192,255,212,0.55)';
            }}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: '1px solid rgba(0,255,140,0.3)',
          borderRadius: 6,
          padding: '6px 10px',
          color: '#00ff8c',
          fontSize: 18,
          cursor: 'pointer',
        }}
        className="hamburger"
        aria-label="Toggle menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0, right: 0,
          background: 'rgba(3,13,8,0.98)',
          borderBottom: '1px solid rgba(0,255,140,0.18)',
          padding: '20px 40px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}>
          {NAV_LINKS.map((item) => (
            <button
              key={item}
              onClick={() => handleNav(item)}
              style={{
                background: 'none',
                border: 'none',
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: 14,
                letterSpacing: 2,
                textTransform: 'uppercase',
                color: active === item ? '#00ff8c' : 'rgba(192,255,212,0.7)',
                textAlign: 'left',
                cursor: 'pointer',
                padding: '8px 0',
                borderBottom: '1px solid rgba(0,255,140,0.08)',
              }}
            >
              &gt; {item}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
