import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaCheckCircle,
  FaWhatsapp,
  FaRobot,
  FaChalkboardTeacher,
  FaBriefcase,
  FaBullseye,
  FaFileAlt,
  FaMoneyBillWave,
  FaPhone,
} from 'react-icons/fa';

const FEATURES = [
  { icon: <FaRobot size={22} />,            label: 'AI Integrated Courses' },
  { icon: <FaChalkboardTeacher size={22} />, label: 'Industry Expert Trainers' },
  { icon: <FaBriefcase size={22} />,         label: 'Real-Time Project Training' },
  { icon: <FaBullseye size={22} />,          label: '100% Placement Support' },
  { icon: <FaFileAlt size={22} />,           label: 'Resume & Interview Prep' },
  { icon: <FaMoneyBillWave size={22} />,     label: 'Affordable Fees' },
];

const COURSES = [
  'Java', 'Python', 'Data Analytics', 'Data Science',
  'UI UX', 'Digital Marketing', 'AWS DevOps',
];

export default function ThankYou() {
  const [seconds, setSeconds] = useState(0);

  /* running timer to show elapsed wait time */
  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);

  const fmt = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return m > 0 ? `${m}m ${sec}s` : `${sec}s`;
  };

  return (
    <div className="ty-page">
      <div className="container">
        <div className="ty-card">

          {/* ── Success icon ─────────────────────────────── */}
          <div className="ty-icon-wrap">
            <div className="ty-icon-circle">
              <FaCheckCircle size={44} />
            </div>
          </div>

          {/* ── Main heading ─────────────────────────────── */}
          <div className="ty-content">
            <h1 className="ty-title">Thank You! Your details have been submitted successfully.</h1>
            <p className="ty-sub">
              Our team will contact you shortly with course details and a free demo session.
            </p>
          </div>

          {/* ── Timer strip ──────────────────────────────── */}
          <div className="ty-timer">
            <div className="ty-timer-label">⏱ Expected Response Time</div>
            <div className="ty-timer-text">You'll hear from us within <strong>10 minutes</strong></div>
            <div className="ty-timer-count">Waiting: {fmt(seconds)}</div>
          </div>

          {/* ── Why Login360 ─────────────────────────────── */}
          <div className="ty-features">
            <h2 className="ty-features-title">Why Choose Login360?</h2>
            <div className="ty-features-grid">
              {FEATURES.map((f) => (
                <div className="ty-feature-item" key={f.label}>
                  <div className="ty-feature-icon">{f.icon}</div>
                  <span className="ty-feature-text">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Contact strip ────────────────────────────── */}
          <div className="ty-contact">
            <p className="ty-contact-label">Need Quick Response?</p>
            <a href="tel:+918056477261" className="ty-contact-phone">
              <FaPhone size={16} /> 80564 77261
            </a>
            <p className="ty-contact-desc">Call or WhatsApp us anytime between 9 AM – 9 PM</p>
          </div>

          {/* ── CTA buttons ──────────────────────────────── */}
          <div className="btn-group" style={{ justifyContent: 'center' }}>
            <a
              href="https://wa.me/918056477261"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success btn-lg"
            >
              <FaWhatsapp size={18} /> Join WhatsApp Now
            </a>
            <Link to="/" className="btn btn-outline btn-lg">
              ← Back to Home
            </Link>
          </div>

          {/* ── Courses footer ───────────────────────────── */}
          <div className="ty-courses">
            <p className="ty-courses-label">🎓 Courses Available</p>
            <div className="ty-courses-list">
              {COURSES.map((c) => (
                <span className="ty-course-pill" key={c}>{c}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}