import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const categories = ['All', 'Cuts', 'Color', 'Treatments', 'Styling'];

const services = [
  { cat: 'Cuts', name: "Women's Cut & Style", duration: '60 min', price: '$75', desc: 'Consultation, precision cut, blow-dry and style.' },
  { cat: 'Cuts', name: "Men's Cut", duration: '30 min', price: '$45', desc: 'Clean cut tailored to your style preference.' },
  { cat: 'Cuts', name: 'Children\'s Cut', duration: '30 min', price: '$35', desc: 'Gentle experience for children under 12.' },
  { cat: 'Color', name: 'Full Color', duration: '90 min', price: '$110', desc: 'All-over single process color with gloss finish.' },
  { cat: 'Color', name: 'Balayage', duration: '150 min', price: '$185', desc: 'Hand-painted highlights for a natural sun-kissed look.' },
  { cat: 'Color', name: 'Highlights', duration: '120 min', price: '$145', desc: 'Foil highlights for dimension and brightness.' },
  { cat: 'Color', name: 'Toner', duration: '45 min', price: '$55', desc: 'Neutralize brassiness and perfect your tone.' },
  { cat: 'Treatments', name: 'Keratin Treatment', duration: '120 min', price: '$200', desc: 'Smoothing treatment for frizz-free, silky hair.' },
  { cat: 'Treatments', name: 'Deep Conditioning', duration: '45 min', price: '$60', desc: 'Intensive moisture repair mask with steam.' },
  { cat: 'Treatments', name: 'Scalp Treatment', duration: '30 min', price: '$50', desc: 'Exfoliating and nourishing scalp care ritual.' },
  { cat: 'Styling', name: 'Blowout', duration: '45 min', price: '$55', desc: 'Full volume blowdry with finishing.' },
  { cat: 'Styling', name: 'Updo / Special Occasion', duration: '90 min', price: '$120', desc: 'Elegant styling for weddings and events.' },
];

export default function Services() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? services : services.filter(s => s.cat === active);

  return (
    <div className="services-page">
      <div className="page-hero">
        <p className="section-tag">Our Offerings</p>
        <h1>Services &<br /><em>Pricing</em></h1>
        <p className="page-sub">Every service includes a complimentary consultation and personalized recommendation.</p>
      </div>

      <div className="services-body">
        <div className="filter-bar">
          {categories.map(c => (
            <button
              key={c}
              className={`filter-btn ${active === c ? 'active' : ''}`}
              onClick={() => setActive(c)}
            >{c}</button>
          ))}
        </div>

        <div className="services-grid">
          {filtered.map(s => (
            <div className="service-card" key={s.name}>
              <div className="service-top">
                <span className="service-cat">{s.cat}</span>
                <span className="service-price">{s.price}</span>
              </div>
              <h3>{s.name}</h3>
              <p className="service-desc">{s.desc}</p>
              <p className="service-duration">⏱ {s.duration}</p>
              <Link to="/book" className="service-book-btn">Book this service</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
