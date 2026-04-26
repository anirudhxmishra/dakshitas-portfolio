import React, { useState } from "react";
import '../assets/styles/Project.scss';

const pubColors = [
  { headerBg: '#fdf4ff', headerBorder: '#c084fc', accent: '#7c3aed', tag: '#f3e8ff', tagText: '#6d28d9' }, // lavender
  { headerBg: '#fff0f6', headerBorder: '#f472b6', accent: '#be185d', tag: '#fce7f3', tagText: '#9d174d' }, // rose
];

const certColors = [
  { bg: '#f0fdf4', border: '#34d399', org: '#065f46', title: '#14532d' }, // mint
  { bg: '#eff6ff', border: '#60a5fa', org: '#1e40af', title: '#1e3a8a' }, // sky
  { bg: '#fff7ed', border: '#fb923c', org: '#7c2d12', title: '#92400e' }, // peach
  { bg: '#fdf4ff', border: '#c084fc', org: '#6d28d9', title: '#4c1d95' }, // lavender
  { bg: '#fff0f6', border: '#f472b6', org: '#9d174d', title: '#7d1535' }, // rose
];

const publications = [
  {
    title: "Impact of Perceived Parenting Style on the Attachment Style of Adults in a Romantic Relationship",
    journal: "International Journal of Indian Psychology (IJIP)",
    year: "2024",
    doi: "DOI:10.25215/1202.321",
    link: "https://doi.org/10.25215/1202.321",
    abstract: "Explores how perceived parenting styles during childhood influence adult attachment patterns in romantic relationships — contributing empirical insight into intergenerational psychological transmission.",
  },
  {
    title: "Examining the Impact of Parent Work Life on Adjustment of Young Adults of India",
    journal: "International Journal of Research and Analytical Reviews (IJRAR)",
    year: "2025",
    doi: "DOI:10.56975/ijrar.v12i3.317784",
    link: "https://doi.org/10.56975/ijrar.v12i3.317784",
    abstract: "Examines how parental work-life dynamics shape the psychological adjustment and wellbeing of young adults in the Indian context, with implications for family systems and clinical practice.",
  },
];

const certifications = [
  { name: "The Therapist's Compass", org: "India Mental Health Alliance", desc: "Intensive 4-month programme: didactic coursework, reflective supervision, and applied clinical skills practice." },
  { name: "Reimagining Care: Intersectionality in Therapy Spaces", org: "Karma Care", desc: "5-day intensive training on intersectionality and culturally responsive therapeutic practice." },
  { name: "First Responder Training in Psychosocial Intervention for Crisis Management", org: "PsyFi", desc: "Crisis intervention training for psychosocial first response." },
  { name: "Supervision Program on Cognitive Distortions & Idea Reframing", org: "Mind Peers", desc: "Specialised supervision on cognitive distortion identification and therapeutic reframing." },
  { name: "Reporting Suicides Responsibly: Media Guidelines", org: "Centre for Mental Health Law and Policy", desc: "Training on responsible media communication regarding suicide and mental health." },
];

function Project() {
  const [hoveredPub, setHoveredPub] = useState<number | null>(null);
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);

  return (
    <div className="projects-container" id="projects">
      <h1>Publications & Certifications</h1>

      {/* ── Publications ── */}
      <h2 className="section-sub-heading">Peer-Reviewed Publications</h2>
      <div className="projects-grid" style={{ marginBottom: '3.5rem' }}>
        {publications.map((pub, i) => {
          const c = pubColors[i % pubColors.length];
          const isHovered = hoveredPub === i;
          return (
            <div
              key={i}
              className="project pub-card"
              onMouseEnter={() => setHoveredPub(i)}
              onMouseLeave={() => setHoveredPub(null)}
              style={{
                border: `2px solid ${c.headerBorder}`,
                borderRadius: '14px',
                overflow: 'hidden',
                transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow: isHovered ? `0 12px 36px ${c.headerBorder}55` : '0 2px 12px rgba(0,0,0,0.08)',
                transition: 'all 0.25s ease',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Coloured header block */}
              <div style={{
                background: c.headerBg,
                borderBottom: `2px solid ${c.headerBorder}`,
                padding: '1.2rem 1.4rem',
              }}>
                <span style={{
                  display: 'inline-block',
                  background: c.tag,
                  color: c.tagText,
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  borderRadius: '20px',
                  padding: '3px 10px',
                  marginBottom: '0.6rem',
                }}>
                  {pub.journal} · {pub.year}
                </span>
                <a href={pub.link} target="_blank" rel="noreferrer">
                  <h2 style={{ fontSize: '1rem', lineHeight: 1.45, color: c.accent, margin: 0 }}>
                    {pub.title}
                  </h2>
                </a>
              </div>

              {/* Body */}
              <div style={{ padding: '1.2rem 1.4rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: 1.65, opacity: 0.88 }}>
                  {pub.abstract}
                </p>
                <a href={pub.link} target="_blank" rel="noreferrer" className="doi-link" style={{ color: c.accent }}>
                  {pub.doi} →
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Certifications ── */}
      <h2 className="section-sub-heading">Advanced Training & Certifications</h2>
      {/* Row 1: 3 cards */}
      <div className="cert-grid cert-row-3">
        {certifications.slice(0, 3).map((cert, i) => {
          const c = certColors[i % certColors.length];
          const isHovered = hoveredCert === i;
          return (
            <div
              key={i}
              className="cert-card"
              onMouseEnter={() => setHoveredCert(i)}
              onMouseLeave={() => setHoveredCert(null)}
              style={{
                background: c.bg,
                borderLeft: `4px solid ${c.border}`,
                borderRadius: '12px',
                padding: '1.2rem 1.4rem',
                transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                boxShadow: isHovered ? `0 10px 28px ${c.border}44` : '0 2px 10px rgba(0,0,0,0.06)',
                transition: 'all 0.22s ease',
              }}
            >
              <h3 style={{ fontSize: '0.92rem', fontWeight: 700, color: c.title, margin: '0 0 4px 0' }}>
                {cert.name}
              </h3>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: c.border, display: 'block', marginBottom: '0.5rem' }}>
                {cert.org}
              </span>
              <p style={{ fontSize: '0.84rem', margin: 0, lineHeight: 1.6, color: '#333', opacity: 0.85 }}>
                {cert.desc}
              </p>
            </div>
          );
        })}
      </div>
      {/* Row 2: 2 cards centered */}
      <div className="cert-grid cert-row-2">
        {certifications.slice(3).map((cert, i) => {
          const idx = i + 3;
          const c = certColors[idx % certColors.length];
          const isHovered = hoveredCert === idx;
          return (
            <div
              key={idx}
              className="cert-card"
              onMouseEnter={() => setHoveredCert(idx)}
              onMouseLeave={() => setHoveredCert(null)}
              style={{
                background: c.bg,
                borderLeft: `4px solid ${c.border}`,
                borderRadius: '12px',
                padding: '1.2rem 1.4rem',
                transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                boxShadow: isHovered ? `0 10px 28px ${c.border}44` : '0 2px 10px rgba(0,0,0,0.06)',
                transition: 'all 0.22s ease',
              }}
            >
              <h3 style={{ fontSize: '0.92rem', fontWeight: 700, color: c.title, margin: '0 0 4px 0' }}>
                {cert.name}
              </h3>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: c.border, display: 'block', marginBottom: '0.5rem' }}>
                {cert.org}
              </span>
              <p style={{ fontSize: '0.84rem', margin: 0, lineHeight: 1.6, color: '#333', opacity: 0.85 }}>
                {cert.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;