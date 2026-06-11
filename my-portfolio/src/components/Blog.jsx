import React from 'react';
import { blogPosts } from '../data/blog';

const Blog = () => (
  <section className="section" id="blog" style={{ background: 'var(--bg2)' }}>
    <div className="container">
      <div className="section-eyebrow">Writing</div>
      <h2 className="section-heading">Dev Notes & Blog</h2>
      <div className="blog-grid">
        {blogPosts.map((b, i) => (
          <div className="blog-card" key={i}>
            <div className="blog-cat">{b.category}</div>
            <div className="blog-title">{b.title}</div>
            <div className="blog-meta">{b.date} · Coming soon</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
