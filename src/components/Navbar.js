import React, { useState } from 'react';
import './styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navigation">
      <div className="logo">Beyond Career</div>
      <ul className={isOpen ? 'nav-links nav-links-open' : 'nav-links'}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>☰</div>
    </nav>
  );
};

export default Navbar;
