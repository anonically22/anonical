import { useEffect, useState } from 'react'

export default function Working() {
  const [projects, setProjects] = useState([])
  const [inView, setInView] = useState(false)

  useEffect(() => {
    fetch('/current.json')
      .then(res => res.json())
      .then(data => setProjects(data))
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

    const el = document.getElementById('working-label')
    if (el) observer.observe(el)
    
    return () => observer.disconnect()
  }, [])

  return (
    <section id="working" className="section section-alt">
      <div className="container">
        <div id="working-label" className={`section-label reveal ${inView ? 'is-visible' : ''}`}>
          Currently Working
        </div>
        <div className="projects-grid">
          {projects.map((proj, idx) => {
            const isWip = proj.status === 'In Progress'
            const delayClass = `reveal-delay-${(idx % 4) + 1}`
            
            return (
              <ProjectCard 
                key={proj.name}
                proj={proj} 
                isWip={isWip} 
                delayClass={delayClass} 
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ proj, isWip, delayClass }) {
  const [inView, setInView] = useState(false)

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

    const el = document.getElementById(`proj-${proj.name.replace(/\s+/g, '-')}`)
    if (el) observer.observe(el)
    
    return () => observer.disconnect()
  }, [proj.name])

  return (
    <div 
      id={`proj-${proj.name.replace(/\s+/g, '-')}`}
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
