import React, { useState, useEffect } from 'react';

export default function AnonicallyPortfolio() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayedText, setDisplayedText] = useState('');

  // Typewriter effect for hero headline
  const heroText = 'building in public.\nshipping ideas.\nbreaking things (sometimes).';

  useEffect(() => {
    setIsLoaded(true);
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= heroText.length) {
        setDisplayedText(heroText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      name: 'SubsTrack',
      description: 'Track subscriptions + spending behavior',
      status: 'live',
      stack: 'react / node / mongodb',
      links: [{ label: 'LIVE', url: '#' }, { label: 'CODE', url: '#' }]
    },
    {
      name: 'Second Look',
      description: 'AI-powered UX analysis tool for design systems',
      status: 'in progress',
      stack: 'claude api / react / fastapi',
      links: [{ label: 'TRY', url: '#' }, { label: 'CODE', url: '#' }]
    },
    {
      name: 'Workbench',
      description: '27+ UI/dev tools collection',
      status: 'live',
      stack: 'react / tailwind',
      links: [{ label: 'LIVE', url: '#' }, { label: 'CODE', url: '#' }]
    },
    {
      name: 'Dashboard Analytics',
      description: 'Real-time analytics for side projects',
      status: 'abandoned',
      stack: 'react / firebase',
      links: [{ label: 'CODE', url: '#' }]
    }
  ];

  const ideas = [
    'building a tool to detect fake images using lightweight ML models',
    'exploring dark UI patterns for AI-first applications – how do you signal uncertainty?',
    'testing subscription behavior tracking with event streams, not snapshots',
    'rethinking password managers – can AI make them more usable?',
    'what if you could generate type-safe APIs from Figma designs?',
    'design systems are hard – what if we generated them from code?'
  ];

  return (
    <div style={{ backgroundColor: '#0a0a0a', color: '#f5f5f5', minHeight: '100vh', fontFamily: 'Outfit, system-ui, sans-serif' }}>
      {/* Hero Section */}
      <section style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: '48px',
        paddingRight: '48px',
        maxWidth: '1200px',
        margin: '0 auto',
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.3s ease'
      }}>
        <div style={{ marginBottom: '64px', fontFamily: 'Courier Prime, monospace', fontSize: '20px', fontWeight: 'bold' }}>
          *a22
        </div>

        <h1 style={{
          fontSize: '56px',
          fontWeight: 'bold',
          fontFamily: 'JetBrains Mono, monospace',
          lineHeight: '1.1',
          marginBottom: '24px',
          whiteSpace: 'pre-wrap',
          minHeight: '180px'
        }}>
          {displayedText}
          <span style={{ animation: displayedText.length === heroText.length ? 'none' : 'blink 0.7s infinite', display: 'inline-block' }}>▊</span>
        </h1>

        <p style={{
          fontSize: '16px',
          color: '#a0a0a0',
          lineHeight: '1.6',
          marginBottom: '32px',
          maxWidth: '600px',
          animation: isLoaded ? 'fadeIn 0.8s ease 0.6s forwards' : 'none',
          opacity: 0
        }}>
          Experiments in AI, web systems, and product thinking.
        </p>

        <div style={{
          display: 'flex',
          gap: '16px',
          animation: isLoaded ? 'slideUp 0.6s ease 0.8s forwards' : 'none',
          opacity: 0
        }}>
          <button style={{
            padding: '12px 24px',
            backgroundColor: '#ff3b30',
            color: '#000',
            border: 'none',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '13px',
            transition: 'all 0.3s ease',
            boxShadow: '0 0 0 rgba(255, 59, 48, 0)',
          }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = '0 0 20px rgba(255, 59, 48, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = '0 0 0 rgba(255, 59, 48, 0)';
            }}
          >
            View Lab
          </button>
          <button style={{
            padding: '12px 24px',
            backgroundColor: 'transparent',
            color: '#00d4ff',
            border: '1px solid #00d4ff',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '13px',
            transition: 'all 0.3s ease'
          }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(0, 212, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            Idea Log
          </button>
        </div>
      </section>

      {/* Lab Section */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', paddingLeft: '48px', paddingRight: '48px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '64px', fontFamily: 'JetBrains Mono, monospace', fontSize: '14px', color: '#a0a0a0', letterSpacing: '0.05em' }}>
          ━━━━━━━━━━━━━━━━━━━━━<br/>
          → LAB / BUILDS<br/>
          ━━━━━━━━━━━━━━━━━━━━━
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '24px'
        }}>
          {projects.map((project) => (
            <div key={project.name} style={{
              border: '1px solid #252525',
              padding: '24px',
              backgroundColor: '#141414',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#ff3b30';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 59, 48, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#252525';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <h3 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>
                {project.name}
              </h3>
              <p style={{ fontSize: '14px', color: '#a0a0a0', marginBottom: '16px', lineHeight: '1.6' }}>
                {project.description}
              </p>

              <div style={{ marginBottom: '16px', fontFamily: 'JetBrains Mono, monospace', fontSize: '12px' }}>
                <div style={{ color: '#a0a0a0', marginBottom: '4px' }}>
                  status: {project.status === 'abandoned' ? <span style={{ textDecoration: 'line-through', color: '#a0a0a0' }}>abandoned</span> : project.status}
                </div>
                <div style={{ color: '#a0a0a0' }}>
                  stack: <span style={{ color: '#00d4ff' }}>{project.stack}</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                {project.status === 'live' && (
                  <span style={{
                    padding: '6px 12px',
                    backgroundColor: '#ff3b30',
                    color: '#000',
                    fontSize: '11px',
                    fontWeight: 'bold',
                    fontFamily: 'JetBrains Mono, monospace'
                  }}>
                    LIVE
                  </span>
                )}
                {project.links.map((link) => (
                  <a key={link.label} href={link.url} style={{
                    padding: '6px 12px',
                    backgroundColor: 'transparent',
                    color: '#00d4ff',
                    border: '1px solid #00d4ff',
                    fontSize: '11px',
                    fontWeight: 'bold',
                    fontFamily: 'JetBrains Mono, monospace',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                    display: 'inline-block'
                  }}
                    onMouseEnter={(e) => {
                      e.target.backgroundColor = 'rgba(0, 212, 255, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.backgroundColor = 'transparent';
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Currently Building */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', paddingLeft: '48px', paddingRight: '48px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          border: '2px solid #00d4ff',
          padding: '32px',
          backgroundColor: '#1a1a1a',
          fontFamily: 'JetBrains Mono, monospace'
        }}>
          <h2 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '16px', fontWeight: 'bold', marginBottom: '16px', color: '#00d4ff', letterSpacing: '0.05em' }}>
            CURRENTLY BUILDING
          </h2>
          <div style={{ borderTop: '1px solid #00d4ff', paddingTop: '16px', marginBottom: '24px' }}></div>

          <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px', fontFamily: 'JetBrains Mono, monospace' }}>
            AI-powered Subscription Analyzer
          </h3>

          <p style={{ fontSize: '14px', lineHeight: '1.8', marginBottom: '24px', color: '#f5f5f5' }}>
            Real-time pattern detection for subscription spending behavior. Analyzes user data to find optimization opportunities and savings.
          </p>

          <div style={{ marginBottom: '24px', fontSize: '13px', color: '#a0a0a0' }}>
            <div style={{ marginBottom: '6px' }}>stack: <span style={{ color: '#00d4ff' }}>claude api / react / node.js</span></div>
            <div>status: <span style={{ color: '#00d4ff' }}>in progress (2/4 weeks)</span></div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button style={{
              padding: '10px 20px',
              backgroundColor: '#00d4ff',
              color: '#0a0a0a',
              border: 'none',
              fontWeight: 'bold',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '12px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
              onMouseEnter={(e) => {
                e.target.opacity = '0.8';
              }}
              onMouseLeave={(e) => {
                e.target.opacity = '1';
              }}
            >
              TRY BETA
            </button>
            <button style={{
              padding: '10px 20px',
              backgroundColor: 'transparent',
              color: '#00d4ff',
              border: '1px solid #00d4ff',
              fontWeight: 'bold',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '12px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(0, 212, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              FOLLOW PROGRESS
            </button>
          </div>
        </div>
      </section>

      {/* Idea Log */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', paddingLeft: '48px', paddingRight: '48px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '64px', fontFamily: 'JetBrains Mono, monospace', fontSize: '14px', color: '#a0a0a0', letterSpacing: '0.05em' }}>
          ━━━━━━━━━━━━━━━━━━━━━<br/>
          → IDEA LOG<br/>
          ━━━━━━━━━━━━━━━━━━━━━
        </div>

        <div style={{ maxWidth: '700px' }}>
          {ideas.map((idea, idx) => (
            <div key={idx} style={{
              paddingTop: '16px',
              paddingBottom: '16px',
              borderBottom: '1px solid #252525',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '13px',
              lineHeight: '1.8',
              color: '#a0a0a0',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#f5f5f5';
                e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.05)';
                e.currentTarget.style.paddingLeft = '16px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#a0a0a0';
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.paddingLeft = '0';
              }}
            >
              <span style={{ color: '#00d4ff', marginRight: '12px' }}>→</span>
              {idea}
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', paddingLeft: '48px', paddingRight: '48px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ maxWidth: '700px', lineHeight: '1.8', fontSize: '16px' }}>
          <p style={{ marginBottom: '16px' }}>I'm Anirbaan.</p>
          <p style={{ marginBottom: '24px' }}>I build things as anonically22.</p>
          <p style={{ marginBottom: '24px', color: '#a0a0a0' }}>
            Mostly web products, sometimes AI experiments. Trying to turn ideas into products that people actually use.
          </p>
          <div style={{ borderTop: '1px solid #252525', paddingTop: '24px', marginTop: '32px', color: '#a0a0a0', fontSize: '14px', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '8px' }}>Some background:</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>• AI/ML intern at Leonard Corporate Solutions</li>
              <li>• IP law intern at Office of CGPDTM</li>
              <li>• Published research in cryptographic security & IP</li>
              <li>• B.Tech in CS from Techno India University (2022–2026)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        paddingTop: '48px',
        paddingBottom: '48px',
        borderTop: '1px solid #252525',
        textAlign: 'center',
        color: '#a0a0a0',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '12px'
      }}>
        <p style={{ marginBottom: '16px' }}>built by a22<br/>aka anirbaan</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '24px' }}>
          <a href="#" style={{ color: '#00d4ff', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#ff3b30'} onMouseLeave={(e) => e.target.style.color = '#00d4ff'}>twitter</a>
          <a href="#" style={{ color: '#00d4ff', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#ff3b30'} onMouseLeave={(e) => e.target.style.color = '#00d4ff'}>github</a>
          <a href="#" style={{ color: '#00d4ff', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#ff3b30'} onMouseLeave={(e) => e.target.style.color = '#00d4ff'}>email</a>
        </div>
        <p>© 2024</p>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        * {
          margin: 0;
          padding: 0;
        }
        body {
          background-color: #0a0a0a;
        }
      `}</style>
    </div>
  );
}
