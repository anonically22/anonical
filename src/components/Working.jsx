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
                idx={idx}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'

function ProjectCard({ proj, isWip, delayClass, idx }) {
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
      className={`project-card editorial-card reveal ${delayClass} ${inView ? 'is-visible' : ''}`}
    >
      <div className="editorial-card-inner">
        <div className="editorial-card-header">
          <span className="editorial-number">{String(idx + 1).padStart(2, '0')}</span>
          <div className="editorial-meta">
            <span>{proj.type}</span>
            <span>{proj.year}</span>
          </div>
        </div>
        
        <Link to={`/project/${proj.id}`} className="editorial-img-wrapper">
          <img src={proj.img} alt={proj.name} loading="lazy" />
        </Link>
        
        <div className="editorial-card-body">
          <h3 className="editorial-title">{proj.name}</h3>
          <p className="editorial-desc">{proj.description}</p>
          <Link to={`/project/${proj.id}`} className="btn-link editorial-link">
            View Case Study
            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M1 11L11 1M11 1H4M11 1V8"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
