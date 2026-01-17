import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">Yash</span>
        </div>
        
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><button onClick={() => scrollToSection('about')}>About</button></li>
          <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
          <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
          <li><button onClick={() => scrollToSection('experience')}>Experience</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>

        <button 
          className="theme-toggle"
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
