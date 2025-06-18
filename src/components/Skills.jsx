import React from 'react';
import '../styles/Skills.css';

const skills = [
  'JavaScript',
  'React.js',
  'Django',
  'Python',
  'SQL',
  'HTML5 & CSS3',
  'Git & GitHub',
  'Canva',
  'Latex',
  'Numpy',
  'Pandas',
  'Matplotlib',
  'Jupyter',
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Skills</h2>
        <ul className="skills-list">
          {skills.map((skill, idx) => (
            <li key={idx} className="skill-item">{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
