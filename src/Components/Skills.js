import React, { useEffect } from 'react';
import './Skills.css';

// Skill data
const skills = [
  { id: 1, name: 'Java', icon: '☕' },
  { id: 2, name: 'Spring Boot', icon: '🌱' },
  { id: 3, name: 'React.js', icon: '⚛️' },
  { id: 4, name: 'MySQL', icon: '🛢️' },
  { id: 5, name: 'JavaScript', icon: '📜' },
  { id: 6, name: 'HTML & CSS', icon: '🌐' },
  { id: 7, name: 'Git & GitHub', icon: '🔧' },
  { id: 8, name: 'REST APIs', icon: '🔗' },
];

function Skills() {
  // Scroll Animation Effect
  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.querySelector('.skills-container');
      const windowHeight = window.innerHeight;
      const sectionTop = skillsSection.getBoundingClientRect().top;

      if (sectionTop < windowHeight * 0.75) {
        skillsSection.classList.add('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="skills" className="skills-section">
      <h1 className="skills-heading">Skills</h1>
      <div className="skills-container">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-card">
            <span className="skill-icon">{skill.icon}</span>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
