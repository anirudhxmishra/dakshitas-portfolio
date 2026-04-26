import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ArticleIcon from '@mui/icons-material/Article';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import logo from '../assets/images/logo.jpeg'
import '../assets/styles/Main.scss';

const achievements = [
  {
    Icon: EmojiEventsIcon,
    iconColor: '#f59e0b',
    title: 'Serai Fellowship',
    desc: 'Selected in Top 28 of 200+ applicants across 20 countries for an independent research project proposal',
  },
  {
    Icon: ArticleIcon,
    iconColor: '#818cf8',
    title: '2 Peer-Reviewed Publications',
    desc: 'Indexed journals (IJIP & IJRAR) within 2 years of completing MA',
  },
  {
    Icon: PsychologyIcon,
    iconColor: '#34d399',
    title: '2+ Years Clinical Exposure',
    desc: '50+ child & adolescent cases across ADHD, ASD, anxiety, depression & developmental delays',
  },
  {
    Icon: AssessmentIcon,
    iconColor: '#60a5fa',
    title: '10+ Assessment Tools',
    desc: 'Trained across neurodevelopmental, emotional, and behavioural domains',
  },
  {
    Icon: DesignServicesIcon,
    iconColor: '#f472b6',
    title: 'Program Builder',
    desc: 'Designed intern supervision structure, school outreach programs, and recurring digital group therapy curricula',
  },
];

const education = [
  {
    degree: 'MA Clinical Psychology',
    institution: 'Amity University, Noida',
    years: '2022 – 2024',
    focus: 'Clinical assessment, psychopathology, therapeutic interventions across the lifespan',
  },
  {
    degree: 'BA (Hons) Psychology',
    institution: 'Graphic Era University, Dehradun',
    years: '2019 – 2022',
    focus: '',
  },
];

function Main() {
  return (
    <div className="container">
      <div id="about" style={{ position: 'absolute', top: 0 }} />
      {/* Hero */}
      <div className="about-section">
        <div className="avatar-placeholder">
          <img src={logo} alt="Dakshita Yadav" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="mailto:dakshitayadav66@gmail.com" target="_blank" rel="noreferrer"><EmailIcon /></a>
            <a href="https://www.linkedin.com/in/dakshita-yadav-7281251b8/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <h1>Dakshita Yadav</h1>
          <p className="subtitle">Psychologist · Child & Adolescent Specialist · Program Designer · Researcher</p>
          <div className="contact-info">
            <span><PhoneIcon fontSize="small" /> +91 9259837238</span>
            <span><LocationOnIcon fontSize="small" /> Delhi, India</span>
          </div>
          <div className="mobile_social_icons">
            <a href="mailto:dakshitayadav66@gmail.com" target="_blank" rel="noreferrer"><EmailIcon /></a>
            <a href="https://www.linkedin.com/in/dakshita-yadav-7281251b8/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>

      {/* About + Education — side by side */}
      <div className="about-edu-row">

        {/* Left: About / Summary */}
        <div className="about-col">
          <h2 className="section-label">About</h2>
          <p className="summary-text">
            Psychologist with 2+ years of multi-context experience spanning direct therapy, program design, research, and team leadership.
            Proven ability to build and manage initiatives — from structuring intern supervision programs at a developmental clinic, to
            conceptualising recurring group psychosocial programs for a digital platform, to conducting qualitative research at a management
            institute. Published researcher skilled at translating clinical insight into scalable, culturally responsive programs.
          </p>
        </div>

        {/* Right: Education */}
        <div className="edu-col">
          <h2 className="section-label">Education</h2>
          <div className="education-list">
            {education.map((e, i) => (
              <div className="edu-card" key={i}>
                <div className="edu-left" />
                <div className="edu-right">
                  <h4 className="edu-degree">{e.degree}</h4>
                  <p className="edu-inst">{e.institution}</p>
                  <span className="edu-years">{e.years}</span>
                  {e.focus && <p className="edu-focus">{e.focus}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Key Achievements — full width below */}
      <div className="achievements-section">
        <h2 className="section-label">Key Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((a, i) => {
            const { Icon, iconColor, title, desc } = a;
            return (
              <div className="achievement-card" key={i}>
                <Icon style={{ fontSize: '1.5rem', color: iconColor, flexShrink: 0 }} />
                <div>
                  <h4 className="ach-title">{title}</h4>
                  <p className="ach-desc">{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Main;