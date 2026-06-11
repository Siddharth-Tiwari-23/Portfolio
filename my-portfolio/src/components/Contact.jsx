import React from 'react';

const Contact = () => (
  <section className="section" id="contact">
    <div className="container">
      <div className="contact-wrapper">
        <h2 className="contact-title">Let's build something<br />together</h2>
        <p className="contact-sub">
          Currently looking for internships, freelance work, and full-time roles.<br />
          My inbox is always open.
        </p>
        <div className="contact-links">
          <a href="mailto:tsiddharth838@gmail.com" className="btn btn-primary">
            ✉ tsiddharth838@gmail.com
          </a>
          <a
            href="https://github.com/Siddharth-Tiwari-23"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/siddharth-tiwari-23"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
