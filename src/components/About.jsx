import React from 'react';

const About = () => {
  return (
    <div style={{ maxWidth: '600px', lineHeight: '1.8', fontSize: '16px' }}>
      <p style={{ marginBottom: 'var(--space-md)' }}>I'm Anirbaan.</p>
      <p style={{ marginBottom: 'var(--space-lg)' }}>I build things as <strong>anonically22</strong>.</p>
      <p style={{ marginBottom: 'var(--space-lg)', color: 'var(--text-secondary)' }}>
        Mostly web products, sometimes AI experiments. Trying to turn ideas into products that people actually use.
      </p>
      <div style={{ 
        borderTop: '1px solid var(--border-color)', 
        paddingTop: 'var(--space-lg)', 
        marginTop: 'var(--space-xl)', 
        color: 'var(--text-secondary)', 
        fontSize: '14px' 
      }}>
        <p style={{ marginBottom: 'var(--space-sm)', color: 'var(--text-primary)' }}>Some background:</p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: 'var(--space-xs)' }}>• AI/ML intern at Leonard Corporate Solutions</li>
          <li style={{ marginBottom: 'var(--space-xs)' }}>• IP law intern at Office of CGPDTM</li>
          <li style={{ marginBottom: 'var(--space-xs)' }}>• Published research in cryptographic security & IP</li>
          <li style={{ marginBottom: 'var(--space-xs)' }}>• B.Tech in CS from Techno India University (2022–2026)</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
