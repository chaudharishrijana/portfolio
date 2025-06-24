// src/components/Contact.jsx
import React, { useRef, useState } from 'react';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_41shd98', 
        'template_lurezxl', 
        form.current,
        'qTOBmly80i8fgp7D8' 
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <p>Feel free to reach out for collaborations or just a friendly hello!</p>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form">
            <p className="form-intro">Direct messages are welcome here:</p>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
              <button type="submit" className="btn-primary">Send</button>
              {status && <p className="status-message">{status}</p>}
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-card">
            <h3>My Contact Information</h3>
            <p><strong>Email:</strong> chaudharishrijana76@gmail.com</p>
            <p><strong>Phone:</strong> +977 9804525204</p>

            <p>
              <strong>GitHub:</strong>{' '}
              <a
                href="https://github.com/chaudharishrijana"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <FaGithub style={{ verticalAlign: 'middle', marginRight: '6px', color: '#64ffda' }} />
              </a>
            </p>

            <p>
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/in/shrijana-chaudhari-bb3860290/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <FaLinkedin style={{ verticalAlign: 'middle', marginRight: '6px', color: '#64ffda' }} />
              </a>
            </p>

            <p>
              <strong>View CV:</strong>{' '}
                        <a
            href={`${import.meta.env.BASE_URL}python_intern(1).pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', marginTop: '1rem', gap: '6px' }}
          >
            <FiDownload />
            View My CV
          </a>

            </p>

            <p><strong>Permanent Address:</strong> Bardiya, Nepal</p>
            <p><strong>Temporary Address:</strong> Lalitpur, Nepal</p>
          </div>
        </div>
      </div>
    </section>
  );
}
