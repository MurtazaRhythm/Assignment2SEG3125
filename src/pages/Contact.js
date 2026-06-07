import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  return (
    <div className="contact-page">
      <div className="page-hero">
        <p className="section-tag">Get in Touch</p>
        <h1>Contact<br /><em>Lumière Studio</em></h1>
        <p className="page-sub">We'd love to hear from you.</p>
      </div>

      <div className="contact-body">
        <div className="contact-info">
          <div className="info-block">
            <p className="info-label">Address</p>
            <p>123 Elgin Street<br />Ottawa, ON K2P 0V9</p>
          </div>
          <div className="info-block">
            <p className="info-label">Hours</p>
            <p>Mon – Fri: 9:00 AM – 7:00 PM<br />Saturday: 9:00 AM – 5:00 PM<br />Sunday: Closed</p>
          </div>
          <div className="info-block">
            <p className="info-label">Phone</p>
            <p>+1 (613) 555-0182</p>
          </div>
          <div className="info-block">
            <p className="info-label">Email</p>
            <p>hello@lumierestudio.ca</p>
          </div>
          <div className="info-block">
            <p className="info-label">Designed By</p>
            <p>Murtaza Tahmid Rhythm<br />SEG3125 – University of Ottawa</p>
          </div>
        </div>

        <div className="contact-form-wrap">
          {!sent ? (
            <>
              <h3>Send a Message</h3>
              <div className="contact-form">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Your name" value={form.name} onChange={e => set('name', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="your@email.com" value={form.email} onChange={e => set('email', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea rows={5} placeholder="How can we help?" value={form.message} onChange={e => set('message', e.target.value)} />
                </div>
                <button
                  className="send-btn"
                  disabled={!form.name || !form.email || !form.message}
                  onClick={() => setSent(true)}
                >Send Message</button>
              </div>
            </>
          ) : (
            <div className="sent-confirm">
              <span className="confirm-icon">✦</span>
              <h3>Message Received</h3>
              <p>Thank you, {form.name}! We'll get back to you at {form.email} within 24 hours.</p>
              <button className="send-btn" onClick={() => { setSent(false); setForm({ name:'', email:'', message:'' }); }}>Send Another</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
