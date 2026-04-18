import React from 'react';
import { motion } from 'framer-motion';

const ideas = [
  'building a tool to detect fake images using lightweight ML models',
  'exploring dark UI patterns for AI-first applications – how do you signal uncertainty?',
  'testing subscription behavior tracking with event streams, not snapshots',
  'rethinking password managers – can AI make them more usable?',
  'what if you could generate type-safe APIs from Figma designs?',
  'design systems are hard – what if we generated them from code?',
  'exploring cursor tracking as a UX metric – does it tell you anything real?'
];

const IdeaLog = () => {
  return (
    <div style={{ maxWidth: '750px' }}>
      {ideas.map((idea, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          style={{
            padding: 'var(--space-md) 0',
            borderBottom: '1px solid var(--border-color)',
            fontSize: '13px',
            lineHeight: '1.8',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'flex-start',
            transition: 'all 0.2s ease'
          }}
          className="mono"
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--text-primary)';
            e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.05)';
            e.currentTarget.style.paddingLeft = 'var(--space-md)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-secondary)';
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.paddingLeft = '0';
          }}
        >
          <span style={{ color: 'var(--accent-cyan)', marginRight: '12px' }}>→</span>
          {idea}
        </motion.div>
      ))}
    </div>
  );
};

export default IdeaLog;
