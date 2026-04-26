import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faChalkboardTeacher, faMicroscope } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const pastelPalette = [
  { bg: '#ffd6e0', color: '#7d1535' },
  { bg: '#ffecd2', color: '#7a3d00' },
  { bg: '#fff3b0', color: '#5c4a00' },
  { bg: '#d4f1d4', color: '#155215' },
  { bg: '#c8e6ff', color: '#0a3560' },
  { bg: '#e4d4f4', color: '#3d006b' },
  { bg: '#ffd6f0', color: '#6b0048' },
  { bg: '#d4f4ef', color: '#004d40' },
  { bg: '#ffe4c8', color: '#5c2800' },
  { bg: '#d4e8ff', color: '#002560' },
  { bg: '#f4d4d4', color: '#5c0000' },
  { bg: '#e8f4d4', color: '#2a5200' },
];

function chipStyle(index: number, offset = 0) {
  const c = pastelPalette[(index + offset) % pastelPalette.length];
  return {
    backgroundColor: c.bg,
    color: c.color,
    fontWeight: 700,
    fontSize: '0.78rem',
    border: 'none',
    boxShadow: `0 2px 8px ${c.bg}99`,
  };
}

const assessmentTools = [
  "INCLEN", "VSMS", "MISIC", "SPM", "CBCL",
  "CARS", "16PF", "Beck Anxiety & Depression",
  "DPT", "Hamilton-D", "Developmental Screening Tools"
];

const therapeuticModalities = [
  "CBT", "Narrative Therapy", "Play-Based Therapy",
  "Expressive Arts", "DMT", "Behaviour Therapy",
  "Psychodynamic Elements", "Social Communication Interventions"
];

const leadershipSkills = [
  "Intern Supervision", "Curriculum Design", "Group Facilitation",
  "Program Evaluation", "Stakeholder Coordination", "Outreach Strategy",
  "Qualitative Research", "Thematic Analysis", "SPSS",
  "MS Excel", "Qualtrics", "Academic Writing",
  "AI Tools (Claude, Perplexity)"
];

const cardConfig = [
  {
    icon: faBrain,
    iconColor: '#f472b6',
    titleColor: '#f472b6',
    title: 'Psychological Assessment',
    desc: 'Trained in 10+ standardised assessment tools across neurodevelopmental, emotional, and behavioural domains. Conducted 50+ comprehensive psychodiagnostic assessments for children aged 3–17, informing differential diagnoses across ADHD, ASD, anxiety, depression, and developmental delays.',
    chipLabel: 'Tools:',
    chips: assessmentTools,
    chipOffset: 0,
  },
  {
    icon: faChalkboardTeacher,
    iconColor: '#34d399',
    titleColor: '#34d399',
    title: 'Therapeutic Practice & Program Design',
    desc: 'Delivered 780+ therapy sessions for children, adolescents, and teens. Designed culturally adapted intervention plans, structured intern supervision programs, school outreach initiatives, and recurring digital group therapy curricula reaching diverse populations.',
    chipLabel: 'Modalities:',
    chips: therapeuticModalities,
    chipOffset: 3,
  },
  {
    icon: faMicroscope,
    iconColor: '#818cf8',
    titleColor: '#818cf8',
    title: 'Research, Leadership & Technical',
    desc: 'Published researcher with 2 peer-reviewed publications in indexed journals. Selected in Top 28 of 200+ applicants across 20 countries for the Serai Fellowship. Experienced in qualitative research design, thematic analysis, and academic manuscript preparation.',
    chipLabel: 'Skills:',
    chips: leadershipSkills,
    chipOffset: 6,
  },
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          {cardConfig.map((card, ci) => (
            <div
              className="skill"
              key={ci}
              style={{
                borderTop: `3px solid ${card.iconColor}`,
                borderRadius: '12px',
                padding: '1.5rem',
              }}
            >
              <FontAwesomeIcon
                icon={card.icon}
                size="3x"
                style={{ color: card.iconColor, filter: `drop-shadow(0 0 8px ${card.iconColor}88)` }}
              />
              <h3 style={{ color: card.titleColor, marginTop: '0.8rem' }}>{card.title}</h3>
              <p>{card.desc}</p>
              <div className="flex-chips">
                <span className="chip-title">{card.chipLabel}</span>
                {card.chips.map((label, i) => (
                  <Chip
                    key={i}
                    className="chip"
                    label={label}
                    style={chipStyle(i, card.chipOffset)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expertise;