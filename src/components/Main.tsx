import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import logo from '../assets/images/logo.jpeg'
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">

        {/* Avatar circle */}
        <div className="avatar-placeholder">
          <img src={logo} alt="Dakshita Yadav" />
        </div>

        {/* All text content */}
        <div className="content">
          <div className="social_icons">
            <a href="mailto:dakshitayadav66@gmail.com" target="_blank" rel="noreferrer">
              <EmailIcon />
            </a>
            <a href="https://www.linkedin.com/in/dakshita-yadav-7281251b8/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>

          <h1>Dakshita Yadav</h1>

          <p className="subtitle">Psychologist · Child & Adolescent Specialist · Program Designer · Researcher</p>

          <div className="contact-info">
            <span><PhoneIcon fontSize="small" /> +91 9259837238</span>
            <span><LocationOnIcon fontSize="small" /> Delhi, India</span>
          </div>

          <div className="mobile_social_icons">
            <a href="mailto:dakshitayadav66@gmail.com" target="_blank" rel="noreferrer">
              <EmailIcon />
            </a>
            <a href="https://www.linkedin.com/in/dakshita-yadav-7281251b8/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Main;