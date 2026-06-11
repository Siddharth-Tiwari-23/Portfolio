import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <span className="footer-copy">
        © {new Date().getFullYear()} Siddharth Tiwari · Built with React & Tailwind
      </span>
      <div className="footer-links">
        <a href="https://github.com/Siddharth-Tiwari-23" target="_blank" rel="noreferrer">GitHub</a>
        <a href="mailto:tsiddharth838@gmail.com">Email</a>
        <a href="#home">Back to top ↑</a>
      </div>
    </div>
  </footer>
);

export default Footer;
