import React from 'react';

const miniCards = [
  { icon: '⚡', title: 'MERN Stack', sub: 'MongoDB · Express · React · Node' },
  { icon: '🎯', title: 'DSA Enthusiast', sub: '500+ problems solved' },
  { icon: '🎓', title: 'NIT Bhopal', sub: 'B.Tech Civil Eng. · CGPA 7.92' },
  { icon: '🤝', title: 'Aaroha NGO', sub: 'Management Member' },
];

const Hero = () => (
  <section className="hero" id="home">
    <div className="container">
      <div className="hero-grid">
        <div>
          <div className="hero-status">
            <span className="status-dot" />
            Open to internships & opportunities
          </div>
          <h1>
            Siddharth<br />
            <span className="line2">Tiwari</span>
          </h1>
          <p className="hero-sub">
            Full-stack web developer from NIT Bhopal. I build scalable MERN applications
            with clean code, sharp UI, and real-world impact.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">View Projects →</a>
            <a
              href="https://github.com/Siddharth-Tiwari-23"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              GitHub ↗
            </a>
            <a href="mailto:tsiddharth838@gmail.com" className="btn btn-outline">
              Say Hello ✉
            </a>
          </div>
        </div>

        <div className="hero-card-stack">
          {miniCards.map((c, i) => (
            <div className="mini-card" key={i}>
              <div className="mini-card-icon">{c.icon}</div>
              <div className="mini-card-text">
                <strong>{c.title}</strong>
                <span>{c.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
