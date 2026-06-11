import React from 'react';

const Navbar = ({ scrolled }) => (
  <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
    <div className="container navbar-inner">
      <a href="#home" className="logo">ST<span>.</span></a>
      <ul className="nav-links">
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a
        href="/Siddharth_Tiwari_Resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="nav-cta"
      >
        Resume ↗
      </a>
    </div>
  </nav>
);

export default Navbar;
