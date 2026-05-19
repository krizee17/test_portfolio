import React, { useState, useEffect } from 'react';
import './styles/globals.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const NAV_LINKS = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '28px 32px',
      borderTop: '1px solid rgba(0,255,140,0.12)',
      fontFamily: "'Share Tech Mono', monospace",
      fontSize: 12,
      color: 'rgba(192,255,212,0.45)',
    }}>
      <span>© 2025 Kritika Adhikari</span>
      <span style={{ margin: '0 14px', color: '#00ff8c' }}>◆</span>
      <span>Built with passion for cybersecurity</span>
      <span style={{ margin: '0 14px', color: '#00ff8c' }}>◆</span>
      <span>Ethical HCK | Herald College Kathmandu</span>
    </footer>
  );
}

function App() {
  const [active, setActive] = useState('Home');

  // Watch scroll position and update active nav link
  useEffect(() => {
    const sections = NAV_LINKS.map((id) => document.getElementById(id.toLowerCase()));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const match = NAV_LINKS.find((n) => n.toLowerCase() === id);
            if (match) setActive(match);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-60px 0px -40% 0px' }
    );

    sections.forEach((sec) => { if (sec) observer.observe(sec); });
    return () => observer.disconnect();
  }, []);

  const handleNav = (item) => {
    setActive(item);
    const el = document.getElementById(item.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{
      background: '#030d08',
      minHeight: '100vh',
      color: '#c0ffd4',
      fontFamily: "'Share Tech Mono', monospace",
      overflowX: 'hidden',
    }}>
      <Navbar active={active} onNav={handleNav} />

      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(20px, 5vw, 48px)' }}>
        <Home onNav={handleNav} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
