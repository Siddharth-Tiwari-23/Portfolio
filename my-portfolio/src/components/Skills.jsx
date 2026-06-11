import React from 'react';
import { skillGroups } from '../data/skills';

const Skills = () => (
  <section className="section" id="skills" style={{ background: 'var(--bg2)' }}>
    <div className="container">
      <div className="section-eyebrow">Capabilities</div>
      <h2 className="section-heading">Skills</h2>
      <div className="skills-layout">
        {skillGroups.map((g) => (
          <div className="skill-group" key={g.category}>
            <div className="skill-group-title">{g.category}</div>
            <div className="skill-chips">
              {g.skills.map((s) => <span className="skill-chip" key={s}>{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
