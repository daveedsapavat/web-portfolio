import React, { useEffect } from 'react';
import './Experience.css';

// Experience data
const experiences = [
  {
    id: 1,
    title: 'Agile Methodology Internship',
    company: 'Cognizant',
    duration: 'Oct 2022 - Nov 2022',
    description: 'Worked in an Agile development team, gaining hands-on experience in sprint planning, backlog refinement, and Agile ceremonies. Assisted in the development of a Prototype web Application, implementing Agile principles. Developed knowledge in Software Development Life Cycle (SDLC) and variance analysis.  ',

  },
  {
    id: 2,
    title: 'Programming Developer Intern',
    company: 'Accenture',
    duration: 'Aug 2022 - Sep 2022',
    description: ' Developed a CRUD-based web application using Java, MySQL, and RESTful APIs. Implemented authentication and session management for secure data handling. Acquired in-depth knowledge and skills of project and software Development. ',
  },
];

function Experience() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.experience-card');
      elements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight * 0.8) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
   
  useEffect(() => {
    // Generate red stars dynamically
    const starContainer = document.createElement('div');
    starContainer.className = 'red-stars';
    document.querySelector('.experience-section').appendChild(starContainer);
  
    for (let i = 0; i < 50; i++) {
      const star = document.createElement('div');
      star.className = 'red-star';
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      starContainer.appendChild(star);
    }
  }, []);
  

  return (
    <section id="experience" className="experience-section">
      {/* Rotating ISS Background */}
      <div className="iss-background"></div>

      {/* Experience Content */}
      <h1 className="experience-heading">Experience</h1>
      <div className="experience-container">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-card">
            <h2>{exp.title}</h2>
            <h3>{exp.company}</h3>
            <p className="duration">{exp.duration}</p>
            <p className="description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
