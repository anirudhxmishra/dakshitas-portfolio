import React, { useState } from "react";
import '../assets/styles/Project.scss';

const accentColors = [
  { accent: '#a78bfa', border: 'rgba(167,139,250,0.25)' }, // lavender
  { accent: '#f472b6', border: 'rgba(244,114,182,0.25)' }, // rose
];

const certAccents = [
  '#34d399', // mint
  '#60a5fa', // sky
  '#fb923c', // peach
  '#c084fc', // lavender
  '#f472b6', // rose
];

const publications = [
  {
    title: "Impact of Perceived Parenting Style on the Attachment Style of Adults in a Romantic Relationship",
    journal: "IJIP",
    journalFull: "International Journal of Indian Psychology",
    year: "2024",
    doi: "DOI:10.25215/1202.321",
    link: "https://doi.org/10.25215/1202.321",
    abstract: "Explores how perceived parenting styles during childhood influence adult attachment patterns in romantic relationships — contributing empirical insight into intergenerational psychological transmission.",
  },
  {
    title: "Examining the Impact of Parent Work Life on Adjustment of Young Adults of India",
    journal: "IJRAR",
    journalFull: "International Journal of Research and Analytical Reviews",
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

      {/* Publications */}
      <h2 className="section-sub-heading">Peer-Reviewed Publications</h2>
      <div className="projects-grid" style={{ marginBottom: '3.5rem' }}>
        {publications.map((pub, i) => {
          const c = accentColors[i % accentColors.length];
          const isHovered = hoveredPub === i;
          return (
            <div
              key={i}
              className="pub-card"
              onMouseEnter={() => setHoveredPub(i)}
              onMouseLeave={() => setHoveredPub(null)}
              style={{
                borderLeft: `3px solid ${c.accent}`,
                transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                transition: 'all 0.22s ease',
              }}
            >
              {/* Journal + year tag */}
              <div className="pub-meta">
                <span className="pub-journal-tag" style={{ color: c.accent, borderColor: c.border }}>
                  {pub.journal} · {pub.year}
                </span>
              </div>

              <a href={pub.link} target="_blank" rel="noreferrer">
                <h2 className="pub-title" style={{ color: c.accent }}>{pub.title}</h2>
              </a>

              <p className="pub-abstract">{pub.abstract}</p>

              <a href={pub.link} target="_blank" rel="noreferrer" className="doi-link" style={{ color: c.accent }}>
                {pub.doi} →
              </a>
            </div>
          );
        })}
      </div>

      {/* Certifications */}
      <h2 className="section-sub-heading">Advanced Training & Certifications</h2>
      <div className="cert-grid cert-row-3">
        {certifications.slice(0, 3).map((cert, i) => {
          const accent = certAccents[i];
          const isHovered = hoveredCert === i;
          return (
            <div
              key={i}
              className="cert-card"
              onMouseEnter={() => setHoveredCert(i)}
              onMouseLeave={() => setHoveredCert(null)}
              style={{
                borderTop: `2px solid ${accent}`,
                transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                transition: 'all 0.22s ease',
              }}
            >
              <span className="cert-dot" style={{ background: accent }} />
              <h3 className="cert-name">{cert.name}</h3>
              <span className="cert-org" style={{ color: accent }}>{cert.org}</span>
              <p className="cert-desc">{cert.desc}</p>
            </div>
          );
        })}
      </div>
      <div className="cert-grid cert-row-2">
        {certifications.slice(3).map((cert, i) => {
          const idx = i + 3;
          const accent = certAccents[idx % certAccents.length];
          const isHovered = hoveredCert === idx;
          return (
            <div
              key={idx}
              className="cert-card"
              onMouseEnter={() => setHoveredCert(idx)}
              onMouseLeave={() => setHoveredCert(null)}
              style={{
                borderTop: `2px solid ${accent}`,
                transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                transition: 'all 0.22s ease',
              }}
            >
              <span className="cert-dot" style={{ background: accent }} />
              <h3 className="cert-name">{cert.name}</h3>
              <span className="cert-org" style={{ color: accent }}>{cert.org}</span>
              <p className="cert-desc">{cert.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;