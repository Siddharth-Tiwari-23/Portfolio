import React from 'react';
import { education } from '../data/education';

const Education = () => (
  <section className="section" id="education">
    <div className="container">
      <div className="section-eyebrow">Academic background</div>
      <h2 className="section-heading">Education</h2>
      <div className="edu-grid">
        {education.map((e, i) => (
          <div className="edu-card" key={i}>
            <div>
              <div className="edu-school">{e.school}</div>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-score">{e.score}</div>
              <div className="edu-years">{e.years}</div>
            </div>
            <span className="edu-badge">{e.badge}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
