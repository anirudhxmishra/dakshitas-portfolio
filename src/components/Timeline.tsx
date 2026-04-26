import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

const cardColors = [
  { bg: '#fff0f6', border: '#f472b6', title: '#7d1535' }, // rose
  { bg: '#f0fdf4', border: '#34d399', title: '#065f46' }, // mint
  { bg: '#eff6ff', border: '#60a5fa', title: '#1e3a8a' }, // sky blue
  { bg: '#fdf4ff', border: '#c084fc', title: '#4a0072' }, // lavender
  { bg: '#fff7ed', border: '#fb923c', title: '#7c2d12' }, // peach
];

const timelineData = [
  {
    date: 'May 2025 – Present',
    title: 'Consultant Therapist (Freelance)',
    subtitle: 'Mantra Care · The Therapist Room · Private Practice · Remote',
    desc: 'Managing active online caseload of adolescents and young adults. Multi-modal practitioner delivering CBT, Psychodynamic, and Expressive Arts approaches. Strict digital confidentiality and self-managed administrative practice.',
  },
  {
    date: 'Feb 2026 – Mar 2026',
    title: 'Research Associate',
    subtitle: 'Management Development India (MDI) · West Bengal, India',
    desc: 'Led end-to-end qualitative data management — interview guides, semi-structured interviews, thematic coding. Contributed to academic manuscript preparation across a nationally significant research study.',
  },
  {
    date: 'Aug 2024 – Apr 2025',
    title: 'Mental Health Practitioner',
    subtitle: 'Asha Hai · Delhi, India',
    desc: 'Conducted 50+ psychodiagnostic assessments for children aged 3–17. Delivered 780+ therapy sessions. Designed early childhood intervention plans, school outreach programs, and built the centre\'s structured internship supervision program.',
  },
  {
    date: 'Dec 2023 – Oct 2024',
    title: 'Group Facilitator & Program Designer',
    subtitle: 'Ylanes (Digital Mental Health Platform) · Remote',
    desc: 'Conceptualised and led a recurring weekly psychosocial group programme. Facilitated 50+ group sessions with 8–12 participants on developmental patterns, self-awareness, and interpersonal relationships.',
  },
  {
    date: 'Aug 2021 – Jan 2022',
    title: 'Assistant Behaviour Therapist',
    subtitle: 'NIDAAN The Psychological Services · Dehradun, India',
    desc: 'Supported individualised behaviour modification and educational planning for a child with special needs. Documented behaviour patterns and adapted learning materials to match evolving needs.',
  },
];

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {timelineData.map((item, i) => {
            const c = cardColors[i % cardColors.length];
            return (
              <VerticalTimelineElement
                key={i}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: c.bg,
                  color: '#1a1a2e',
                  borderTop: `4px solid ${c.border}`,
                  boxShadow: `0 4px 20px ${c.border}33`,
                }}
                contentArrowStyle={{ borderRight: `7px solid ${c.border}` }}
                date={item.date}
                iconStyle={{ background: '#5000ca', color: '#fff' }}
                icon={<FontAwesomeIcon icon={faBriefcase} />}
              >
                <h3 className="vertical-timeline-element-title" style={{ color: c.title, fontWeight: 700 }}>
                  {item.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle" style={{ color: c.border, fontWeight: 600, marginTop: '4px' }}>
                  {item.subtitle}
                </h4>
                <p style={{ color: '#2d2d2d', marginTop: '8px', lineHeight: 1.65 }}>
                  {item.desc}
                </p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;