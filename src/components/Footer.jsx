import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      padding: 'var(--space-xxl) 0',
      borderTop: '1px solid var(--border-color)',
      textAlign: 'center',
      color: 'var(--text-secondary)',
      fontSize: '12px'
    }} className="mono">
      <p style={{ marginBottom: 'var(--space-md)' }}>
        built by a22<br />
        aka anirbaan
      </p>
      <div style={{ display: 'flex', gap: 'var(--space-lg)', justifyContent: 'center', marginBottom: 'var(--space-lg)' }}>
        <a href="#" style={{ color: 'var(--accent-cyan)' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-red)'} onMouseLeave={(e) => e.target.style.color = 'var(--accent-cyan)'}>twitter</a>
        <a href="#" style={{ color: 'var(--accent-cyan)' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-red)'} onMouseLeave={(e) => e.target.style.color = 'var(--accent-cyan)'}>github</a>
        <a href="#" style={{ color: 'var(--accent-cyan)' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-red)'} onMouseLeave={(e) => e.target.style.color = 'var(--accent-cyan)'}>email</a>
      </div>
      <p>© 2026</p>
    </footer>
  );
};

export default Footer;
