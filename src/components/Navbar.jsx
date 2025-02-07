import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../components/css/Navbar.css';
import logo from '../image/purity_logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Company Logo" className="logo-image" />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        {['home', 'about', 'services', 'projects', 'team', 'contact Us'].map((section) => (
          <li key={section}>
            <Link to={section} smooth={true} duration={500} offset={-70} onClick={toggleMenu}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
