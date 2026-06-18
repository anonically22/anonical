import { useEffect, useState } from 'react'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [types, setTypes] = useState([])
  const [filter, setFilter] = useState('all')
  const [inView, setInView] = useState(false)

  useEffect(() => {
    Promise.all([
      fetch('/current.json').then(res => res.json()),
      fetch('/projects.json').then(res => res.json())
    ])
    .then(([currentData, projectsData]) => {
      const combined = [...currentData, ...projectsData]
      setProjects(combined)
      const uniqueTypes = [...new Set(combined.map(p => p.type).filter(Boolean))].sort()
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
    <section id="projects" className="section section-alt">
      <div className="container" id="projects-section-content">
        <div className={`section-label reveal ${inView ? 'is-visible' : ''}`}>Work</div>
        <h2 className={`section-heading reveal ${inView ? 'is-visible' : ''}`}>Currently Building & Shipped</h2>
        
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

        <div className="folder-stack-container">
          {filteredProjects.map((proj, idx) => {
            return (
              <FolderCard 
                key={proj.name}
                proj={proj} 
                idx={idx}
                total={filteredProjects.length}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'

// Reference palette based on the attached image vibe
const FOLDER_COLORS = [
  { bg: '#D63230', text: '#FFFFFF', meta: '#F3B3B3' }, // Red
  { bg: '#A63C3C', text: '#FFFFFF', meta: '#D89E9E' }, // Dark Red
  { bg: '#E5E7EB', text: '#111827', meta: '#6B7280' }, // Light Gray
  { bg: '#374151', text: '#F9FAFB', meta: '#9CA3AF' }, // Dark Slate
  { bg: '#1E293B', text: '#F8FAFC', meta: '#94A3B8' }, // Navy Slate
  { bg: '#264635', text: '#ECFDF5', meta: '#A7F3D0' }, // Dark Green
  { bg: '#D4B886', text: '#1C1917', meta: '#57534E' }, // Sand
  { bg: '#1F2E45', text: '#F1F5F9', meta: '#94A3B8' }, // Navy Blue
  { bg: '#8A4F3C', text: '#FFEDD5', meta: '#FDBA74' }, // Rust
  { bg: '#8B7355', text: '#FEF3C7', meta: '#D4D4D8' }, // Olive
  { bg: '#926100', text: '#FEF08A', meta: '#FDE047' }, // Dark Gold
  { bg: '#A89F91', text: '#171717', meta: '#525252' }  // Putty
]

function FolderCard({ proj, idx, total }) {
  const theme = FOLDER_COLORS[idx % FOLDER_COLORS.length]
  const topOffset = 56 + (idx * 80) // Stacks down from nav, increased spacing to keep header visible

  const isWip = proj.status === 'In Progress'

  return (
    <Link 
      to={`/project/${proj.id}`}
      id={`folder-${proj.name.replace(/\s+/g, '-')}`}
      className="folder-card"
      style={{
        backgroundColor: theme.bg,
        color: theme.text,
        top: `${topOffset}px`,
        zIndex: idx
      }}
    >
      <div className="folder-card-inner">
        <div className="folder-header" style={{ color: theme.meta }}>
          <div className="folder-meta-left">
            <span>{String(idx + 1).padStart(2, '0')}</span>
            <span className="folder-id">/{proj.id}</span>
          </div>
          <div className="folder-meta-center">
            {proj.tagline || proj.type}
          </div>
          <div className="folder-meta-right">
            <div className={`folder-bookmark ${isWip ? 'bookmark-wip' : 'bookmark-shipped'}`} style={{ borderColor: theme.meta }}>
              <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="bookmark-icon">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>{isWip ? 'Working' : 'Shipped'}</span>
            </div>
            <div className="folder-year">{proj.year}</div>
          </div>
        </div>

        <div className="folder-image">
          <div className="folder-img-wrapper">
            <img src={proj.img} alt={proj.name} loading="lazy" />
          </div>
        </div>

        {proj.description && (
          <div className="folder-desc">
            {proj.description}
          </div>
        )}

        <div className="folder-body">
          <h2 className="folder-title">{proj.name}</h2>
        </div>
      </div>
    </Link>
  )
}
