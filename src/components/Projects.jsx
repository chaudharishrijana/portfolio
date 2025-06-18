import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: 'Yoga Pose Detection And Correction System',
    description: 'A Django web app with medapipe that detects yoga poses using machine learning and provides live feedback.',
    tech: 'HTML, CSS, JavaScripts, Django, TensorFlow',
    /*live: 'https://your-live-link.com',*/
    code: 'https://github.com/chaudharishrijana/Yoga-Assistant/tree/main/yoga_web'
  },
  {
    title: 'Portfolio Website',
    description: 'This portfolio website built with React and plain CSS to showcase projects and skills.',
    tech: 'React, CSS',
    /*live: '#',*/
    code: 'https://github.com/yourusername/portfolio'
  },
  
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map(({ title, description, tech, live, code }, idx) => (
            <div key={idx} className="project-card">
              <h3>{title}</h3>
              <p>{description}</p>
              <p><strong>Tech Stack:</strong> {tech}</p>
              <div className="project-links">
                {live !== '#' && <a href={live} target="_blank" rel="noreferrer" className="btn-secondary">Live Demo</a>}
                <a href={code} target="_blank" rel="noreferrer" className="btn-secondary">Source Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
