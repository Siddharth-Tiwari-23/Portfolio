import React from 'react';

const Experience = () => (
  <section className="section" id="experience" style={{ background: 'var(--bg2)' }}>
    <div className="container">
      <div className="section-eyebrow">Beyond code</div>
      <h2 className="section-heading">Positions of Responsibility</h2>
      <div className="exp-card">
        <div className="exp-header">
          <div>
            <div className="exp-org">Aaroha NGO</div>
            <div className="exp-role">Management Member · Promoted from PR Executive</div>
          </div>
          <div className="exp-period">Aug 2024 – Present · Bhopal, MP</div>
        </div>
        <ul className="exp-bullets">
          <li>
            Directing strategic planning and volunteer operations for educational outreach, impacting
            underprivileged children through structured weekly curriculum delivery.
          </li>
          <li>
            Negotiated and secured long-term food sponsorships from local vendors, reducing event
            overhead by 20% and streamlining logistics.
          </li>
          <li>
            Facilitated communication between executive tiers and volunteers to ensure smooth execution
            of large-scale social awareness events and donation drives.
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Experience;
