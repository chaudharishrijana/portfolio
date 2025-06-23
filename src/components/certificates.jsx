// src/components/Certificates.jsx
import React from 'react';
import '../styles/Certificates.css';
import { FiDownload } from 'react-icons/fi';
import { SiProgramiz } from 'react-icons/si'; // Programiz icon

export default function Certificates() {
  const certificates = [
    {
      title: 'Python Basics Certificate',
      file: '/certificates/Learn Python Basics.pdf',
    },
    {
      title: 'Python Intermediate',
      file: '/certificates/Practice_Python Intermediate.pdf',
    },
    {
      title: 'CSS',
      file: '/certificates/Learn CSS.pdf',
    },
    {
      title: 'Complexity Calculation',
      file: '/certificates/Complexity Calculation.pdf',
    },
    {
      title: 'Recursion with Python',
      file: '/certificates/Recursion with Python.pdf',
    },
    {
      title: 'SQL',
      file: '/certificates/Learn SQL Basics.pdf',
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
              <SiProgramiz className="cert-icon" />
              <h3>{cert.title}</h3>
              <p className="issuer">Issued by Programiz</p>
              <a href={cert.file} download className="btn-download">
                <FiDownload className="icon" />
                Download PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
