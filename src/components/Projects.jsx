import { useEffect, useState } from 'react'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [types, setTypes] = useState([])
  const [filter, setFilter] = useState('all')
  const [inView, setInView] = useState(false)

  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => {
        setProjects(data)
        const uniqueTypes = [...new Set(data.map(p => p.type).filter(Boolean))].sort()
        setTypes(uniqueTypes)
      })
      .catch(err => console.warn('[anonically22]', err))
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const el = document.getElementById('projects-section-content')
    if (el) observer.observe(el)
    
    return () => observer.disconnect()
  }, [])

  const typeDisplay = {
    'ai': 'AI',
    'finance': 'Finance',
    'tool': 'Tools',
    'web': 'Web'
  }

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.type === filter)

  return (
    <section id="projects" className="section">
      <div className="container" id="projects-section-content">
        <div className={`section-label reveal ${inView ? 'is-visible' : ''}`}>Projects</div>
        <h2 className={`section-heading reveal ${inView ? 'is-visible' : ''}`}>Things I've shipped</h2>
        
        {types.length > 0 && (
          <div className={`filter-bar reveal ${inView ? 'is-visible' : ''}`}>
            <button 
              className={`btn-filter ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            {types.map(type => (
              <button 
                key={type}
                className={`btn-filter ${filter === type ? 'active' : ''}`}
                onClick={() => setFilter(type)}
              >
                {typeDisplay[type] || type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        )}

        <div className="projects-grid">
          {filteredProjects.map((proj, idx) => {
            const isWip = proj.status === 'In Progress'
            const delayClass = `reveal-delay-${(idx % 4) + 1}`
            
            return (
              <ProjectCard 
                key={proj.name}
                proj={proj} 
                isWip={isWip} 
                delayClass={delayClass}
                inViewContainer={inView}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ proj, isWip, delayClass, inViewContainer }) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    // Reset inview on proj name change to trigger animations
    setInView(false)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const el = document.getElementById(`archive-${proj.name.replace(/\s+/g, '-')}`)
    if (el) observer.observe(el)
    
    return () => observer.disconnect()
  }, [proj.name])

  return (
    <div 
      id={`archive-${proj.name.replace(/\s+/g, '-')}`}
      className={`project-card reveal ${delayClass} ${inView ? 'is-visible' : ''}`}
    >
      <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-img-wrapper">
        {proj.featured && <span className="tag tag--featured">Featured</span>}
        <img src={proj.img} alt={proj.name} loading="lazy" />
      </a>
      <div className="project-card-body">
        <div className="project-header">
          <div>
            {proj.type && <span className="tag">{proj.type}</span>}
            <h3 className="project-title">{proj.name}</h3>
          </div>
          <span className={`tag tag--status ${isWip ? 'wip' : ''}`}>{proj.status}</span>
        </div>
        <div className="project-tagline">{proj.tagline}</div>
        <p className="project-desc">{proj.description}</p>
        <div className="project-tech">
          {proj.tech.map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={proj.link} target="_blank" rel="noopener noreferrer" className="btn-link">
            Live
            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M1 11L11 1M11 1H4M11 1V8"/>
            </svg>
          </a>
          {proj.github && (
            <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn-link">
              GitHub
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M1 11L11 1M11 1H4M11 1V8"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
