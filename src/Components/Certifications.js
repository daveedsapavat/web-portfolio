import React, { useEffect } from 'react';
import './Certifications.css';

// Certification data
const certifications = [
  {
    id: 1,
    title: 'Java Full Stack Developer Certificate',
    organization: 'Tata Strive @Generation OF India',
    
  },
  {
    id: 2,
    title: 'Agile Methodology Intern Certificate',
    organization: 'Cognizant',
    
  },
  {
    id: 3,
    title: 'Programing Developer Intern Certificate',
    organization: 'Accenture',
   
  },
];

function Certification() {
  // Scroll Animation
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.certification-card');
      elements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight * 0.85) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="certifications" className="certification-section">
      <h1 className="certification-heading">Certifications</h1>
      <div className="certification-container">
        {certifications.map((cert) => (
          <div key={cert.id} className="certification-card">
            <h2>{cert.title}</h2>
            <h3>{cert.organization}</h3>
            <p className="cert-date">{cert.date}</p>
            <p className="cert-description">{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certification;
