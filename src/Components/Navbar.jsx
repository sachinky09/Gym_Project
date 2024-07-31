import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
        <li><a href="#home">Home</a></li>
        <li><a href="#program">Program</a></li>
        <li><a href="#about">About us</a></li>
        <li><a href="#campus">Campus</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li className="navbar-contact"><button>Contact us</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
