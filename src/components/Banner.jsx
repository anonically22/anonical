import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <motion.div 
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      className="dev-banner"
    >
      <div className="banner-content">
        <span className="banner-tag">NOTICE:</span>
        <p>The site is in development, stay tuned for more updates.</p>
      </div>
      
      <style>{`
        .dev-banner {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background-color: var(--accent-cyan);
          color: #000;
          font-family: var(--font-mono);
          font-size: 11px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .banner-content {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .banner-tag {
          background: #000;
          color: var(--accent-cyan);
          padding: 2px 6px;
          font-size: 9px;
        }

        /* Adjust site content to avoid being hidden by fixed banner */
        :global(body) {
          padding-top: 30px;
        }

        @media (max-width: 600px) {
          .dev-banner {
            font-size: 9px;
          }
          .banner-tag {
            display: none;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Banner;
