import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (event, offset) => {
    event.preventDefault();
    window.scrollBy({
      top: offset,
      behavior: 'smooth'
    });
    setIsOpen(false); // Close the menu on link click
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>GYMKHANA</span>
      </div>
      <div className="navbar-hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#program" onClick={(e) => scrollToSection(e, 800)}>Manifesto</a></li>
        <li><a href="#candidates" onClick={(e) => scrollToSection(e, 1600)}>Candidates</a></li>
        <li><a href="#about" onClick={(e) => scrollToSection(e, 2050)}>Answers</a></li>
        <li className="navbar-contact"><button onClick={(e) => scrollToSection(e, 2500)}>Contact us</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
