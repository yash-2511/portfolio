import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Vite']
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Authentication']
    },
    {
      name: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker']
    },
    {
      name: 'Other',
      skills: ['Problem Solving', 'Team Collaboration', 'Project Management', 'Communication']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category-card">
              <div className="skill-category-header">
                <h3>{category.name}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-tag">
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
