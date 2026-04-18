import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const isAbandoned = project.status === 'abandoned';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        borderColor: 'var(--accent-red)',
        boxShadow: '0 0 20px rgba(255, 59, 48, 0.1)',
        scale: 1.01
      }}
      style={{
        border: '1px solid var(--border-color)',
        padding: 'var(--space-lg)',
        backgroundColor: 'var(--surface-color)',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <h3 style={{ fontSize: '20px', marginBottom: 'var(--space-sm)' }}>
        {project.name}
      </h3>
      <p style={{ 
        fontSize: '14px', 
        color: 'var(--text-secondary)', 
        marginBottom: 'var(--space-md)',
        flexGrow: 1
      }}>
        {project.description}
      </p>

      <div style={{ marginBottom: 'var(--space-md)', fontSize: '13px' }} className="mono">
        <div style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-xs)' }}>
          status: {isAbandoned ? (
            <span style={{ textDecoration: 'line-through' }}>abandoned</span>
          ) : (
            <span style={{ color: project.status === 'live' ? 'var(--accent-red)' : 'var(--accent-cyan)' }}>
              {project.status}
            </span>
          )}
        </div>
        <div style={{ color: 'var(--text-secondary)' }}>
          stack: <span style={{ color: 'var(--accent-cyan)' }}>{project.stack}</span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
        {project.status === 'live' && (
          <span style={{
            padding: '6px 12px',
            backgroundColor: 'var(--accent-red)',
            color: '#000',
            fontSize: '11px',
            fontWeight: 'bold'
          }} className="mono">
            LIVE
          </span>
        )}
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            style={{
              padding: '6px 12px',
              backgroundColor: 'transparent',
              color: 'var(--accent-cyan)',
              border: '1px solid var(--accent-cyan)',
              fontSize: '11px',
              fontWeight: 'bold',
              textDecoration: 'none'
            }}
            className="mono"
            onMouseEnter={(e) => { e.target.style.backgroundColor = 'rgba(0, 212, 255, 0.1)'; }}
            onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
