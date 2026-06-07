import React, { useState } from 'react';
import './Book.css';

const services = [
  "Women's Cut & Style", "Men's Cut", "Children's Cut",
  "Full Color", "Balayage", "Highlights", "Toner",
  "Keratin Treatment", "Deep Conditioning", "Scalp Treatment",
  "Blowout", "Updo / Special Occasion"
];

const stylists = ['No Preference', 'Sophie Laurent', 'Amélie Côté', 'Jade Moreau'];

const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
                   '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

const steps = ['Service', 'Stylist', 'Date & Time', 'Your Info', 'Confirm'];

function getTodayStr() {
  return new Date().toISOString().split('T')[0];
}

export default function Book() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    service: '', stylist: '', date: '', time: '',
    name: '', email: '', phone: '', notes: ''
  });
  const [confirmed, setConfirmed] = useState(false);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const canNext = () => {
    if (step === 0) return !!form.service;
    if (step === 1) return !!form.stylist;
    if (step === 2) return !!form.date && !!form.time;
    if (step === 3) return !!form.name && !!form.email;
    return true;
  };

  const handleConfirm = () => setConfirmed(true);

  if (confirmed) {
    return (
      <div className="book-page">
        <div className="confirmation">
          <div className="confirm-icon">✦</div>
          <h2>You're Booked!</h2>
          <p className="confirm-sub">A confirmation has been sent to <strong>{form.email}</strong></p>
          <div className="confirm-details">
            <div className="confirm-row"><span>Service</span><span>{form.service}</span></div>
            <div className="confirm-row"><span>Stylist</span><span>{form.stylist}</span></div>
            <div className="confirm-row"><span>Date</span><span>{form.date}</span></div>
            <div className="confirm-row"><span>Time</span><span>{form.time}</span></div>
            <div className="confirm-row"><span>Client</span><span>{form.name}</span></div>
          </div>
          <p className="confirm-note">We look forward to welcoming you at Lumière Studio.<br />123 Elgin Street, Ottawa, ON</p>
          <button className="btn-primary-btn" onClick={() => { setConfirmed(false); setStep(0); setForm({ service:'',stylist:'',date:'',time:'',name:'',email:'',phone:'',notes:'' }); }}>
            Book Another Appointment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="book-page">
      <div className="page-hero">
        <p className="section-tag">Reservations</p>
        <h1>Book Your<br /><em>Appointment</em></h1>
        <p className="page-sub">Reserve your spot online in just a few steps.</p>
      </div>

      <div className="book-body">
        {/* Stepper */}
        <div className="stepper">
          {steps.map((s, i) => (
            <div key={s} className={`step ${i === step ? 'active' : ''} ${i < step ? 'done' : ''}`}>
              <div className="step-dot">{i < step ? '✓' : i + 1}</div>
              <span>{s}</span>
            </div>
          ))}
        </div>

        <div className="book-form">
          {/* Step 0 - Service */}
          {step === 0 && (
            <div className="form-step">
              <h3>Select a Service</h3>
              <div className="option-grid">
                {services.map(s => (
                  <button
                    key={s}
                    className={`option-btn ${form.service === s ? 'selected' : ''}`}
                    onClick={() => set('service', s)}
                  >{s}</button>
                ))}
              </div>
            </div>
          )}

          {/* Step 1 - Stylist */}
          {step === 1 && (
            <div className="form-step">
              <h3>Choose Your Stylist</h3>
              <div className="stylist-options">
                {stylists.map(s => (
                  <button
                    key={s}
                    className={`stylist-option ${form.stylist === s ? 'selected' : ''}`}
                    onClick={() => set('stylist', s)}
                  >
                    <div className="s-avatar">{s === 'No Preference' ? '✦' : s.split(' ').map(n=>n[0]).join('')}</div>
                    <span>{s}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 - Date & Time */}
          {step === 2 && (
            <div className="form-step">
              <h3>Pick a Date & Time</h3>
              <div className="date-time-row">
                <div className="form-group">
                  <label>Date</label>
                  <input type="date" min={getTodayStr()} value={form.date} onChange={e => set('date', e.target.value)} />
                </div>
              </div>
              {form.date && (
                <>
                  <p className="slots-label">Available Times</p>
                  <div className="time-grid">
                    {timeSlots.map(t => (
                      <button
                        key={t}
                        className={`time-btn ${form.time === t ? 'selected' : ''}`}
                        onClick={() => set('time', t)}
                      >{t}</button>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Step 3 - Info */}
          {step === 3 && (
            <div className="form-step">
              <h3>Your Information</h3>
              <div className="input-grid">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" placeholder="Jane Doe" value={form.name} onChange={e => set('name', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input type="email" placeholder="jane@email.com" value={form.email} onChange={e => set('email', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Phone (optional)</label>
                  <input type="tel" placeholder="+1 (613) 555-0000" value={form.phone} onChange={e => set('phone', e.target.value)} />
                </div>
                <div className="form-group full">
                  <label>Notes (optional)</label>
                  <textarea rows={3} placeholder="Any special requests or information..." value={form.notes} onChange={e => set('notes', e.target.value)} />
                </div>
              </div>
            </div>
          )}

          {/* Step 4 - Confirm */}
          {step === 4 && (
            <div className="form-step">
              <h3>Review & Confirm</h3>
              <div className="review-card">
                <div className="review-row"><span>Service</span><strong>{form.service}</strong></div>
                <div className="review-row"><span>Stylist</span><strong>{form.stylist}</strong></div>
                <div className="review-row"><span>Date</span><strong>{form.date}</strong></div>
                <div className="review-row"><span>Time</span><strong>{form.time}</strong></div>
                <div className="review-row"><span>Client</span><strong>{form.name}</strong></div>
                <div className="review-row"><span>Email</span><strong>{form.email}</strong></div>
                {form.notes && <div className="review-row"><span>Notes</span><strong>{form.notes}</strong></div>}
              </div>
              <p className="review-note">By confirming, you agree to our 24-hour cancellation policy.</p>
            </div>
          )}

          {/* Navigation */}
          <div className="step-nav">
            {step > 0 && <button className="btn-back" onClick={() => setStep(s => s - 1)}>← Back</button>}
            {step < 4
              ? <button className="btn-next" disabled={!canNext()} onClick={() => setStep(s => s + 1)}>Continue →</button>
              : <button className="btn-confirm" onClick={handleConfirm}>Confirm Appointment</button>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
