import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUserGraduate, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

const workColors = [
  { bg: '#fff0f6', border: '#f472b6', title: '#7d1535' }, // rose
  { bg: '#f0fdf4', border: '#34d399', title: '#065f46' }, // mint
  { bg: '#eff6ff', border: '#60a5fa', title: '#1e3a8a' }, // sky blue
  { bg: '#fdf4ff', border: '#c084fc', title: '#4a0072' }, // lavender
  { bg: '#fff7ed', border: '#fb923c', title: '#7c2d12' }, // peach
];

const internColors = [
  { bg: '#f0fdf4', border: '#6ee7b7', title: '#065f46' },
  { bg: '#eff6ff', border: '#93c5fd', title: '#1e3a8a' },
  { bg: '#fdf4ff', border: '#d8b4fe', title: '#4a0072' },
];

const volunteerColors = [
  { bg: '#fff7ed', border: '#fdba74', title: '#7c2d12' },
  { bg: '#fff0f6', border: '#f9a8d4', title: '#7d1535' },
];

const workData = [
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

const internshipData = [
  {
    date: 'Feb 2023 – Apr 2023',
    title: 'Trainee Psychologist',
    subtitle: 'Jagruti Rehabilitation Centre · Noida',
    desc: 'Observed multidisciplinary rehabilitation approaches; independently delivered positive journaling and therapeutic activity sessions with patients.',
  },
  {
    date: 'Jun 2023 – Jul 2023',
    title: 'Psychology Intern',
    subtitle: 'National Institute for Empowerment of Persons with Visual Disability · Dehradun',
    desc: 'Conducted psychometric assessments and assisted with diagnostic data collection and test administration for persons with visual disability.',
  },
  {
    date: 'Sep 2021 – Dec 2021',
    title: 'Psychology Intern',
    subtitle: 'Nidaan Psychological Services · Dehradun',
    desc: 'Completed full clinical intake workflow — case histories, MSEs, family interviews, and report writing; trained in INCLEN, VSMS, MISIC, SPM, 16PF, Beck Anxiety & Depression, DPT; contributed to intervention planning and psychoeducation.',
  },
];

const volunteerData = [
  {
    date: 'Feb 2023 – May 2023',
    title: 'Mentor & Campaign Lead',
    subtitle: 'Umeed: A Drop of Hope · Delhi',
    desc: 'Provided academic mentorship to children from underserved communities; led awareness campaigns and fundraising initiatives.',
  },
  {
    date: 'Jun 2023 – Jul 2023',
    title: 'Program Support Volunteer',
    subtitle: 'Latika Roy Foundation · Dehradun',
    desc: 'Designed and facilitated therapeutic activities for adults and children with disabilities; supported vocational program planning, documentation, and community engagement across a multidisciplinary team.',
  },
];

function TimelineBlock({
  data,
  colors,
  icon,
  iconBg,
}: {
  data: typeof workData;
  colors: typeof workColors;
  icon: any;
  iconBg: string;
}) {
  return (
    <VerticalTimeline>
      {data.map((item, i) => {
        const c = colors[i % colors.length];
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
            iconStyle={{ background: iconBg, color: '#fff' }}
            icon={<FontAwesomeIcon icon={icon} />}
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
  );
}

function Timeline() {
  return (
    <div id="history">
      {/* Work Experience */}
      <div className="items-container">
        <h1>Work Experience</h1>
        <TimelineBlock data={workData} colors={workColors} icon={faBriefcase} iconBg="#5000ca" />
      </div>

      {/* Internships */}
      <div className="items-container timeline-sub-section">
        <h2 className="timeline-sub-heading">Clinical Internships</h2>
        <TimelineBlock data={internshipData} colors={internColors} icon={faUserGraduate} iconBg="#34d399" />
      </div>

      {/* Volunteer */}
      <div className="items-container timeline-sub-section" id="volunteer">
        <h2 className="timeline-sub-heading">Volunteer & Community Leadership</h2>
        <TimelineBlock data={volunteerData} colors={volunteerColors} icon={faHandsHelping} iconBg="#fb923c" />
      </div>
    </div>
  );
}

export default Timeline;