import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-card">
              <h3>Academic Background</h3>
              <div className="education-item">
                <h4>Bachelor of Technology</h4>
                <p className="school">University Name</p>
                <p className="details">Computer Science & Engineering</p>
                <p className="year">2020 - 2024</p>
                <p className="description">Focused on web development, data structures, and algorithms</p>
              </div>
              
              <div className="education-item">
                <h4>Intermediate</h4>
                <p className="school">Board Name</p>
                <p className="details">Science with Mathematics</p>
                <p className="year">2018 - 2020</p>
              </div>
            </div>

            <div className="about-card">
              <h3>Who I Am</h3>
              <p>
                I'm a passionate full-stack developer with a love for creating elegant solutions to complex problems. 
                With expertise in modern web technologies, I build responsive and interactive applications that provide excellent user experiences.
              </p>
              <p>
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
