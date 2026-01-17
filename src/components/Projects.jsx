import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A modern web application built with React and Node.js',
      image: 'https://via.placeholder.com/300x200',
      tags: ['React', 'Node.js', 'MongoDB'],
      github: '#',
      live: '#'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Full stack e-commerce platform with payment integration',
      image: 'https://via.placeholder.com/300x200',
      tags: ['React', 'Express', 'Stripe'],
      github: '#',
      live: '#'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Real-time collaboration tool for teams',
      image: 'https://via.placeholder.com/300x200',
      tags: ['React', 'WebSocket', 'Firebase'],
      github: '#',
      live: '#'
    },
    {
      id: 4,
      title: 'Project Four',
      description: 'AI-powered task management application',
      image: 'https://via.placeholder.com/300x200',
      tags: ['React', 'Python', 'OpenAI'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <a href={project.github} className="project-link">GitHub</a>
                  <a href={project.live} className="project-link">Live Demo</a>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
