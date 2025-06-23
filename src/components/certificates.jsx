// src/components/Certificates.jsx
import React from 'react';
import '../styles/Certificates.css';
import { FiDownload } from 'react-icons/fi';
import { SiJavascript } from 'react-icons/si'; // Or you can use Programiz icon if you prefer

export default function Certificates() {
  // Use backticks to evaluate process.env.PUBLIC_URL properly in file paths
  const certificates = [
    {
      title: 'Python Basics Certificate',
      file: `${process.env.PUBLIC_URL}/certificates/Learn Python Basics.pdf`,
    },
    {
      title: 'Python Intermediate',
      file: `${process.env.PUBLIC_URL}/certificates/Practice_Python Intermediate.pdf`,
    },
    {
      title: 'CSS',
      file: `${process.env.PUBLIC_URL}/certificates/Learn CSS.pdf`,
    },
    {
      title: 'Complexity Calculation',
      file: `${process.env.PUBLIC_URL}/certificates/Complexity Calculation.pdf`,
    },
    {
      title: 'Recursion with Python',
      file: `${process.env.PUBLIC_URL}/certificates/Recursion with Python.pdf`,
    },
    {
      title: 'SQL',
      file: `${process.env.PUBLIC_URL}/certificates/Learn SQL Basics.pdf`,
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
              {/* Remove download attribute and open link in new tab for viewing */}
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
