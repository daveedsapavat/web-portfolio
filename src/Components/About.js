import React, { useEffect, useState } from 'react';
import './About.css';
import profilePic from '../assets/profile.jpg'; // Add your profile picture to the assets folder
import { FaDownload } from 'react-icons/fa';

function About() {
  const [text, setText] = useState('');
  const fullText = "I'm DAVEED";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);


  return (
    <section id="about" className="about-section">
      {/* Stars */}
      <div className="stars"></div>

      {/* Moon */}
      <div className="moon"></div>

      {/* Jupiter Centered */}
      <div className="jupiter-container">
        <div className="jupiter"></div>
        <div className="jupiter-ring"></div>
      </div>

      {/* Orbiting Planets */}
      <div className="planet planet-1"></div>
      <div className="planet planet-2"></div>
      <div className="planet planet-3"></div>

      {/* About Container */}
      <div className="about-container">
        {/* Profile Picture */}
        <div className="about-image">
          <img src={profilePic} alt="DAVEED" />
        </div>

        {/* About Content */}
        <div className="about-content">
          <h1 className="typewriter">{text}</h1>
          <p>
            A passionate Full Stack Developer skilled in <b>Java, Spring Boot, React.js, and MySQL</b>.  
            I love building scalable, high-performance web applications. Let’s explore the universe of coding together!
          </p>
          <a href="public\resume.pdf" download className="resume-btn">
            <FaDownload className='icon'/>  
            Download Resume</a>
        </div>
      </div>
    </section>
  );
}

export default About;
