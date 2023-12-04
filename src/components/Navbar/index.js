import React, { useState } from 'react';
import './styles.css';

function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <nav>
      <div className="navbar-container">
        <ul className={isMenuVisible ? 'nav-list active' : 'nav-list'}>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#expertise" onClick={toggleMenu}>Expertise</a></li>
          <li><a href="#services" onClick={toggleMenu}>Services</a></li>
          <li><a href="#testimonials" onClick={toggleMenu}>Testimonials</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;