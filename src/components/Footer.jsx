import React from 'react';
import '../styles/Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} <strong>Srijana Tharu</strong>. All rights reserved.
        </p>
        <div className="footer-links">
          <a
            href="https://github.com/chaudharishrijana"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="footer-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shrijana-chaudhari-bb3860290/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer-icon"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
