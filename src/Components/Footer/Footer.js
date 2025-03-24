import React from "react";
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css"; // Import CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/Prashid-Dilshan?tab=overview&from=2025-03-01&to=2025-03-24" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://web.facebook.com/dilshanprasid0710" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.linkedin.com/in/prashid-dilshan-ba054529b" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/prashid_dilshan/profilecard/?igsh=MXA3azhiOG9qN3I2aw==" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <p>All Rights Reserved © 2025 Prashid Dilshan</p>
    </footer>
  );
}

export default Footer;
