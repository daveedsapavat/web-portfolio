import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  

  return (
    <footer className="footer">
      {/* Social Links */}
      <div className="social-links">
        <a href="https://github.com/daveedsapavat" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/daveed-sapavat-8a0461212/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="mailto:daveed4466@gmail.com">
          <FaEnvelope className="icon" />
        </a>
      </div>

      {/* Copyright */}
      <p className="footer-text">© {new Date().getFullYear()} Daveed Sapavat. All Rights Reserved.</p>

      {/* Scroll to Top Button */}
      <button className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
      
    </footer>
  );
}

export default Footer;
