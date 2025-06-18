import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Srijana Tharu. All rights reserved.</p>
      </div>
    </footer>
  );
}
