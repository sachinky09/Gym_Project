import React, { useState } from 'react';
import { Link, animateScroll } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (event, offset) => {
    event.preventDefault();
    
    animateScroll.scrollTo(offset, {
      duration: 500,
      smooth: true
    });
    setIsOpen(false); // Close the menu on link click
  };

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img
          src='https://nitdgp.ac.in/front/assets/images/logo.png'
          alt='nitdgp-logo'
          height='30px'
        />
        <span>GYMKHANA</span>
      </div>
      <div
        className='navbar-hamburger'
        onClick={toggleMenu}
      >
        ☰
      </div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link
            to='manifesto' smooth={true} duration={500} offset={-150}
          >
            Manifesto
          </Link>
        </li>
        <li>
          <Link
            to='candidates' smooth={true} duration={500} offset={-100}
          >
            Candidates
          </Link>
        </li>
        <li>
          <Link
            to='answer' smooth={true} duration={500} offset={-140}
          >
            Answers
          </Link>
        </li>
        <li className='navbar-contact'>
          <button onClick={(e) => scrollToSection(e, 3350)}>Contact us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
