import React from 'react';

const Stats = () => (
  <div className="stats-section">
    <div className="container">
      <div className="stats-grid">
        {[
          { num: '4', accent: '', label: 'Projects shipped' },
          { num: '550', accent: '+', label: 'DSA problems solved' },
          { num: '8.13', accent: '', label: 'CGPA at NIT Bhopal' },
          { num: '250', accent: '+', label: 'Problems on GFG' },
        ].map((s, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-num">
              {s.num}<span>{s.accent}</span>
            </div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Stats;