import React from 'react';
import { projects } from '../data/projects';

const Projects = () => (
  <section className="section" id="projects">
    <div className="container">
      <div className="section-eyebrow">Featured work</div>
      <h2 className="section-heading">Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.id}>
            <div className="proj-num">Project {p.id}</div>
            <h3 className="proj-title">{p.title}</h3>
            <p className="proj-desc">{p.description}</p>
            <div className="tag-row">
              {p.tech.map((t) => <span className="tag" key={t}>{t}</span>)}
            </div>
            <div className="proj-links">
              <a className="proj-link" href={p.github} target="_blank" rel="noreferrer">
                ↗ Code
              </a>
              {p.live && (
                <a className="proj-link" href={p.live} target="_blank" rel="noreferrer">
                  ↗ Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
