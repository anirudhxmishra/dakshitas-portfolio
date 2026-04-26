import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="mailto:dakshitayadav66@gmail.com" target="_blank" rel="noreferrer"><EmailIcon /></a>
        <a href="https://www.linkedin.com/in/dakshita-yadav-7281251b8/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
      </div>
      <p>Dakshita Yadav · Psychologist & Program Designer · Delhi, India</p>
    </footer>
  );
}

export default Footer;