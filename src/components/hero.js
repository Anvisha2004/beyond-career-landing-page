import React from 'react';
import './styles/hero.css';
import heroImg from './resume.svg';
import heroImg2 from './undraw.svg';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-image-row">
  <img src={heroImg} alt="Resume" className="hero-image" />
  <img src={heroImg2} alt="Career" className="hero-image-right" />
</div>

      <div className="hero-background">
        <h1>Welcome to Beyond Career</h1>
        <p>Beyond Career helps you unlock career opportunities with guidance, mentorship, and real experience.</p>
        <button>Join us</button>
      </div>
    </div>
  );
};

export default Hero;
