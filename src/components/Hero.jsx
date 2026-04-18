import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const heroText = 'building in public.\nshipping ideas.\nbreaking things (sometimes).';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= heroText.length) {
        setDisplayedText(heroText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50); // 50ms per char as per spec
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: '600px'
    }}>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ 
          marginBottom: 'var(--space-xxxl)', 
          fontFamily: 'var(--font-display)', 
          fontSize: '20px', 
          fontWeight: 'bold' 
        }}
      >
        *a22
      </motion.div>

      <h1 style={{
        fontSize: 'clamp(40px, 8vw, 56px)',
        fontWeight: 'bold',
        lineHeight: '1.1',
        marginBottom: 'var(--space-lg)',
        whiteSpace: 'pre-wrap',
        minHeight: '180px'
      }}>
        {displayedText}
        <span style={{ 
          animation: displayedText.length === heroText.length ? 'none' : 'blink 0.7s infinite', 
          display: 'inline-block',
          color: 'var(--accent-red)'
        }}>▊</span>
      </h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        style={{
          fontSize: '16px',
          color: 'var(--text-secondary)',
          lineHeight: '1.6',
          marginBottom: 'var(--space-xl)',
          maxWidth: '600px'
        }}
      >
        Experiments in AI, web systems, and product thinking.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}
      >
        <button 
          style={{
            padding: '12px 24px',
            backgroundColor: 'var(--accent-red)',
            color: '#000',
            fontWeight: 'bold',
            fontSize: '13px'
          }}
          className="mono"
          onMouseEnter={(e) => { e.target.style.boxShadow = '0 0 20px rgba(255, 59, 48, 0.4)'; }}
          onMouseLeave={(e) => { e.target.style.boxShadow = 'none'; }}
          onClick={() => document.getElementById('lab').scrollIntoView({ behavior: 'smooth' })}
        >
          View Lab
        </button>
        <button 
          style={{
            padding: '12px 24px',
            backgroundColor: 'transparent',
            color: 'var(--accent-cyan)',
            border: '1px solid var(--accent-cyan)',
            fontWeight: 'bold',
            fontSize: '13px'
          }}
          className="mono"
          onMouseEnter={(e) => { e.target.style.backgroundColor = 'rgba(0, 212, 255, 0.1)'; }}
          onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; }}
          onClick={() => document.getElementById('log').scrollIntoView({ behavior: 'smooth' })}
        >
          Idea Log
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
