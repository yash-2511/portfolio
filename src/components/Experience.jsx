import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Full Stack Developer',
      company: 'Tech Company Name',
      duration: 'Jan 2023 - Present',
      description: 'Developing and maintaining web applications using React and Node.js. Collaborating with cross-functional teams to deliver high-quality solutions.'
    },
    {
      id: 2,
      role: 'Junior Developer',
      company: 'Startup Name',
      duration: 'Jun 2022 - Dec 2022',
      description: 'Built responsive web interfaces using React. Fixed bugs and implemented features based on user feedback.'
    },
    {
      id: 3,
      role: 'Internship',
      company: 'Company Name',
      duration: 'Jan 2022 - May 2022',
      description: 'Learned full stack development fundamentals. Contributed to various projects and improved coding skills.'
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="experience-card">
                <div className="experience-header">
                  <h3 className="experience-role">{exp.role}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <p className="experience-duration">{exp.duration}</p>
                <p className="experience-description">{exp.description}</p>
              </div>
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
