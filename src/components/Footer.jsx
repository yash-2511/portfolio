import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Yash</h3>
            <p>Full Stack Developer | Web Enthusiast</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow Me</h4>
            <div className="footer-socials">
              <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Yash. All rights reserved.</p>
          <p>Designed & Built with ❤️ using React & Vite</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
