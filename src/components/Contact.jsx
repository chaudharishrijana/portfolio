import React, { useRef, useState } from 'react';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_41shd98',       // Your EmailJS Service ID
      'template_lurezxl',      // Your EmailJS Template ID
      form.current,
      'qTOBmly80i8fgp7D8'       // Your EmailJS Public Key
    ).then(
      (result) => {
        console.log(result.text);
        setStatus('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        console.error(error.text);
        setStatus('');  // Do not show any message on failure
      }
    );
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <p>Feel free to reach out for collaborations or just a friendly hello!</p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn-primary">Send</button>
        </form>

        {status && <p className="status-message">{status}</p>}
      </div>
    </section>
  );
}
