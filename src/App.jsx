import React from 'react';
import Hero from './components/Hero';
import SectionHeader from './components/SectionHeader';
import ProjectCard from './components/ProjectCard';
import CurrentlyBuilding from './components/CurrentlyBuilding';
import IdeaLog from './components/IdeaLog';
import About from './components/About';
import Footer from './components/Footer';
import Banner from './components/Banner';
import './styles/globals.css';

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

const App = () => {
  return (
    <div className="portfolio-app">
      <Banner />
      <div className="container">
        <Hero />
        
        <section id="lab" style={{ padding: 'var(--space-xxxl) 0' }}>
          <SectionHeader title="LAB / BUILDS" />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: 'var(--space-lg)',
            marginTop: 'var(--space-xl)'
          }}>
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        <section id="building" style={{ padding: 'var(--space-xxxl) 0' }}>
          <CurrentlyBuilding />
        </section>

        <section id="log" style={{ padding: 'var(--space-xxxl) 0' }}>
          <SectionHeader title="IDEA LOG" />
          <IdeaLog />
        </section>

        <section id="about" style={{ padding: 'var(--space-xxxl) 0' }}>
          <SectionHeader title="ABOUT" />
          <About />
        </section>
      </div>

      <Footer />

      <style>{`
        .portfolio-app {
          background-color: var(--bg-color);
          min-height: 100vh;
        }
        
        @media (max-width: 480px) {
          .container {
            padding: 0 var(--space-md);
          }
          section {
            padding: var(--space-xl) 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default App;
