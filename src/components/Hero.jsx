import React from 'react';
import '../styles/Hero.css';
import profileImage from '../assets/profile.jpg';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-container">
        <img src={profileImage} alt="Srijana Chaudhari" className="profile-photo" />

        {/* Full phrase animated with typewriter */}
        <h1 className="typewriter">Hello, I am Srijana Tharu</h1>

        <p>Full-Stack Developer | React.js | Django</p>
        <a href="#contact" className="btn-primary">Get in Touch</a>
      </div>
    </section>
  );
}
