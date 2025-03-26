import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">Daveed</Link>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleMobileMenu}>
          ☰
        </div>

        {/* Navigation Links */}
        <ul className={isMobile ? 'nav-menu active' : 'nav-menu'}>
          <li><Link to="/" onClick={() => setIsMobile(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsMobile(false)}>About</Link></li>
          <li><Link to="/projects" onClick={() => setIsMobile(false)}>Projects</Link></li>
          <li><Link to="/skills" onClick={() => setIsMobile(false)}>Skills</Link></li>
          <li><Link to="/experience" onClick={() => setIsMobile(false)}>Experience</Link></li>
          <li><Link to="/certifications" onClick={() => setIsMobile(false)}>Certifications</Link></li>
          <li><Link to="/contact" onClick={() => setIsMobile(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
