import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="profile-container">
          <div className="profile-image-wrapper">
            <img 
              src="https://via.placeholder.com/200?text=Your+Photo" 
              alt="Profile" 
              className="profile-image"
            />
            <div className="profile-glow"></div>
          </div>
        </div>
        
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="text-gradient">Hi, I'm Yash</span>
          </h1>
          <p className="hero-subtitle">Full Stack Developer & Tech Enthusiast</p>
          <p className="hero-description">
            Creating beautiful, functional web experiences with modern technologies
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary">View My Work</button>
            <button className="btn btn-secondary">Get In Touch</button>
          </div>

          <div className="social-links">
            <a href="#" className="social-icon">GitHub</a>
            <a href="#" className="social-icon">LinkedIn</a>
            <a href="#" className="social-icon">Twitter</a>
          </div>
        </div>
      </div>

      <div className="hero-background">
        <div className="animated-bg"></div>
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
    </section>
  );
};

export default Hero;
