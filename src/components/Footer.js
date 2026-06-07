import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="logo-symbol">✦</span>
          <span className="logo-text">Lumière Studio</span>
          <p>A sanctuary for hair, beauty & self-care.</p>
        </div>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/book">Book</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-contact">
          <p>123 Elgin Street, Ottawa, ON</p>
          <p>+1 (613) 555-0182</p>
          <p>hello@lumierestudio.ca</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Lumière Studio · Designed by Murtaza Tahmid Rhythm</p>
      </div>
    </footer>
  );
}
