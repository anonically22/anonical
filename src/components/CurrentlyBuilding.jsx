import React from 'react';
import { motion } from 'framer-motion';

const CurrentlyBuilding = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      style={{
        border: '2px solid var(--accent-cyan)',
        padding: 'var(--space-xl)',
        backgroundColor: '#1a1a1a',
      }}
      className="mono"
    >
      <h2 style={{ 
        fontSize: '16px', 
        fontWeight: 'bold', 
        marginBottom: 'var(--space-md)', 
        color: 'var(--accent-cyan)', 
        letterSpacing: '0.05em' 
      }}>
        CURRENTLY BUILDING
      </h2>
      <div style={{ borderTop: '1px solid var(--accent-cyan)', paddingTop: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}></div>

      <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: 'var(--space-md)' }}>
        AI-powered Subscription Analyzer
      </h3>

      <p style={{ 
        fontSize: '15px', 
        lineHeight: '1.8', 
        marginBottom: 'var(--space-lg)', 
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-body)' 
      }}>
        Real-time pattern detection for subscription spending behavior. Analyzes user data to find optimization opportunities and savings.
      </p>

      <div style={{ marginBottom: 'var(--space-lg)', fontSize: '13px', color: 'var(--text-secondary)' }}>
        <div style={{ marginBottom: '6px' }}>stack: <span style={{ color: 'var(--accent-cyan)' }}>claude api / react / node.js</span></div>
        <div>status: <span style={{ color: 'var(--accent-cyan)' }}>in progress (2/4 weeks)</span></div>
      </div>

      <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
        <button style={{
          padding: '10px 20px',
          backgroundColor: 'var(--accent-cyan)',
          color: 'var(--bg-color)',
          fontWeight: 'bold',
          fontSize: '12px'
        }}
        onMouseEnter={(e) => { e.target.style.opacity = '0.8'; }}
        onMouseLeave={(e) => { e.target.style.opacity = '1'; }}
        >
          TRY BETA
        </button>
        <button style={{
          padding: '10px 20px',
          backgroundColor: 'transparent',
          color: 'var(--accent-cyan)',
          border: '1px solid var(--accent-cyan)',
          fontWeight: 'bold',
          fontSize: '12px'
        }}
        onMouseEnter={(e) => { e.target.style.backgroundColor = 'rgba(0, 212, 255, 0.15)'; }}
        onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; }}
        >
          FOLLOW PROGRESS
        </button>
      </div>
    </motion.div>
  );
};

export default CurrentlyBuilding;
