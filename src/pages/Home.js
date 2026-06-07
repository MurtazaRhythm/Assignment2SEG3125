import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const highlights = [
  { icon: '✂', label: 'Precision Cuts', desc: 'Tailored to your face shape and lifestyle.' },
  { icon: '◈', label: 'Color & Balayage', desc: 'Sun-kissed to vivid, we master every tone.' },
  { icon: '❋', label: 'Treatments', desc: 'Restore, hydrate and strengthen your hair.' },
];

const stylists = [
  { name: 'Sophie Laurent', role: 'Creative Director', specialty: 'Balayage & Color' },
  { name: 'Amélie Côté',    role: 'Senior Stylist',    specialty: 'Precision Cuts'    },
  { name: 'Jade Moreau',    role: 'Color Specialist',  specialty: 'Vivid & Fantasy'   },
];

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (el) setTimeout(() => el.classList.add('visible'), 100);
  }, []);

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero" ref={heroRef}>
        <div className="hero-bg">
          <div className="hero-circle c1" />
          <div className="hero-circle c2" />
        </div>
        <div className="hero-content">
          <p className="hero-eyebrow">Ottawa's Premier Hair Studio</p>
          <h1>Where Every Strand<br /><em>Tells a Story</em></h1>
          <p className="hero-sub">Lumière Studio blends artistry with care — crafting looks that feel effortlessly, undeniably you.</p>
          <div className="hero-cta">
            <Link to="/book" className="btn-primary">Book an Appointment</Link>
            <Link to="/services" className="btn-ghost">Explore Services</Link>
          </div>
        </div>
        <div className="hero-accent">
          <div className="accent-card">
            <span className="accent-num">8+</span>
            <span className="accent-label">Years of Artistry</span>
          </div>
          <div className="accent-card">
            <span className="accent-num">2k+</span>
            <span className="accent-label">Happy Clients</span>
          </div>
          <div className="accent-card">
            <span className="accent-num">5★</span>
            <span className="accent-label">Rated in Ottawa</span>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="highlights">
        <div className="section-header">
          <p className="section-tag">What We Offer</p>
          <h2>Services Crafted<br />With Intention</h2>
        </div>
        <div className="highlights-grid">
          {highlights.map(h => (
            <div className="highlight-card" key={h.label}>
              <span className="highlight-icon">{h.icon}</span>
              <h3>{h.label}</h3>
              <p>{h.desc}</p>
            </div>
          ))}
        </div>
        <div className="highlights-cta">
          <Link to="/services" className="btn-link">View all services →</Link>
        </div>
      </section>

      {/* Stylists */}
      <section className="stylists">
        <div className="section-header">
          <p className="section-tag">The Team</p>
          <h2>Meet Your Stylists</h2>
        </div>
        <div className="stylists-grid">
          {stylists.map(s => (
            <div className="stylist-card" key={s.name}>
              <div className="stylist-avatar">
                {s.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3>{s.name}</h3>
              <p className="stylist-role">{s.role}</p>
              <p className="stylist-specialty">✦ {s.specialty}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <h2>Ready for Your<br /><em>Transformation?</em></h2>
        <p>Book your appointment online — it takes less than 2 minutes.</p>
        <Link to="/book" className="btn-primary">Reserve Your Spot</Link>
      </section>
    </div>
  );
}
