import React from 'react';
import { achievements } from '../data/achievements';

const Achievements = () => (
  <section className="section" id="achievements">
    <div className="container">
      <div className="section-eyebrow">Recognition</div>
      <h2 className="section-heading">Achievements</h2>
      <div className="achievements-grid">
        {achievements.map((a, i) => (
          <div className="ach-card" key={i}>
            <div className="ach-icon">{a.icon}</div>
            <div className="ach-value">{a.value}</div>
            <div className="ach-label">{a.label}</div>
            <div className="ach-sub">{a.sub}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
