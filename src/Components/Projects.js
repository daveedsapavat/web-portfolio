import React from 'react';
import './Projects.css';

// Updated project data with the new portfolio link
const projects = [
  {
    id: 1,
    title: 'Secure Web Application using SSL',
    description: 'Implemented SSL/TLS encryption to ensure secure communication between clients and servers.',
    link: 'https://github.com/daveed/secure-web-app',
  },
  {
    id: 2,
    title: 'Jamming Spotify',
    description: 'Built a music app that integrates with Spotify API to create custom playlists.',
    link: 'https://github.com/daveed/jamming-spotify',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing projects and skills.',
    link: 'https://daveedsapavat.github.io/newportfolio.github.io/',
  },
];

function Project() {
  return (
    <section id="projects" className="project-section">
      {/* Title with Sun */}
      <div className="project-title">
        <div className="mini-sun-container">
          <div className="mini-sun"></div>
          <div className="solar-flares"></div>
          <div className="heatwave"></div>
          <div className="sun-rays"></div>
        </div>
        <h1 className="project-heading">Projects</h1>
      </div>

      {/* Projects Section */}
      <div className="project-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
