import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="main-footer">
      <div className="footer-grid-overlay"></div>
      
      <div className="container footer-content">
        <div className="footer-top">
          <div className="footer-contact">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="footer-heading"
            >
              Let's talk!
            </motion.h2>
            <motion.a 
              href="mailto:anirbaandsarkar@gmail.com"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="footer-email"
            >
              anirbaandsarkar@gmail.com <span>↗</span>
            </motion.a>

            <motion.div 
              className="footer-external-link"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <span>wanna check anirbaan?</span>
              <a href="https://anirbaansarkar.vercel.app/" target="_blank" rel="noopener noreferrer">
                visit portfolio <span>→</span>
              </a>
            </motion.div>
          </div>

          <div className="footer-social-column">
            {[
              { label: 'GitHub', url: 'https://github.com/anonically22' },
              { label: 'LinkedIn', url: 'https://www.linkedin.com/in/anirbaan-sarkar/' },
              { label: 'Twitter', url: 'https://x.com/anirbaansarkar' }
            ].map((link, i) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="social-row"
              >
                <span>{link.label}</span>
                <span className="arrow">↗</span>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-info">
            <span>© 2026</span>
            <span className="dot">•</span>
            <span>Crafted with ♥ by anirbaan(aka anonically22)</span>
          </div>
          <div className="footer-actions">
            <button onClick={scrollToTop} className="back-to-top">
              Back To Top <span>↑</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .main-footer {
          position: relative;
          padding: 80px 0 40px;
          margin-top: 100px;
          border-top: 1px solid var(--border-color);
          overflow: hidden;
        }

        .footer-grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(var(--border-color) 1px, transparent 1px),
            linear-gradient(90deg, var(--border-color) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.05;
          pointer-events: none;
        }

        .footer-content {
          position: relative;
          z-index: 2;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 80px;
          gap: 60px;
        }

        .footer-heading {
          font-family: var(--font-body);
          font-weight: 300;
          font-size: clamp(60px, 10vw, 120px);
          margin-bottom: 15px;
          letter-spacing: -2px;
          color: var(--text-primary);
        }

        .footer-email {
          font-size: clamp(18px, 3vw, 22px);
          color: var(--text-primary);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 400;
          margin-bottom: 30px;
        }

        .footer-external-link {
          display: flex;
          flex-direction: column;
          gap: 5px;
          color: var(--text-secondary);
          font-size: 14px;
        }

        .footer-external-link a {
          color: var(--accent-red);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
        }

        .footer-external-link a:hover {
          color: var(--text-primary);
        }

        .footer-social-column {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 400px;
        }

        .social-row {
          display: flex;
          justify-content: space-between;
          padding: 20px 0;
          border-bottom: 1px solid var(--border-color);
          color: var(--text-primary);
          text-decoration: none;
          font-size: 18px;
          transition: all 0.3s ease;
        }

        .social-row:first-child {
          border-top: 1px solid var(--border-color);
        }

        .social-row:hover {
          padding-left: 10px;
          color: var(--accent-cyan);
        }

        .social-row .arrow {
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }

        .social-row:hover .arrow {
          opacity: 1;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 40px;
          font-size: 13px;
          color: var(--text-secondary);
        }

        .dot {
          margin: 0 10px;
          opacity: 0.5;
        }

        .back-to-top {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-family: inherit;
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: color 0.3s ease;
        }

        .back-to-top:hover {
          color: var(--text-primary);
        }

        @media (max-width: 900px) {
          .footer-top {
            flex-direction: column;
            gap: 40px;
          }
          .footer-social-column {
            max-width: 100%;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
