// src/components/Certificates.jsx
import React from 'react';
import '../styles/Certificates.css';
import { FiDownload } from 'react-icons/fi';
import { SiJavascript } from 'react-icons/si'; // Optional: change icon based on certificate type

export default function Certificates() {
  // Certificate details with updated filenames (no spaces or underscores)
  const certificates = [
    {
      title: 'Python Basics Certificate',
      file: `${import.meta.env.BASE_URL}certificates/Learn-Python-Basics.pdf`,
    },
    {
      title: 'Python Intermediate',
      file: `${import.meta.env.BASE_URL}certificates/Practice-Python-Intermediate.pdf`,
    },
    {
      title: 'CSS',
      file: `${import.meta.env.BASE_URL}certificates/Learn-CSS.pdf`,
    },
    {
      title: 'Complexity Calculation',
      file: `${import.meta.env.BASE_URL}certificates/Complexity-Calculation.pdf`,
    },
    {
      title: 'Recursion with Python',
      file: `${import.meta.env.BASE_URL}certificates/Recursion-with-Python.pdf`,
    },
    {
      title: 'SQL',
      file: `${import.meta.env.BASE_URL}certificates/Learn-SQL-Basics.pdf`,
    },
  ];

  return (
    <section className="certificates" id="certificates">
      <div className="container">
        <h2>My Certificates</h2>
        <p>
          These certificates were earned from{' '}
          <a
            href="https://www.programiz.com"
            target="_blank"
            rel="noopener noreferrer"
            className="programiz-link"
          >
            Programiz
          </a>, showcasing my expertise and dedication to learning.
        </p>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div className="certificate-card" key={index}>
              <SiJavascript className="cert-icon" />
              <h3>{cert.title}</h3>
              <p className="issuer">Issued by Programiz</p>
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-download"
              >
                <FiDownload className="icon" />
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
