import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function CaseStudy() {
  const { id } = useParams()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch from both json files to find the project
    Promise.all([
      fetch('/projects.json').then(res => res.json()),
      fetch('/current.json').then(res => res.json())
    ])
    .then(([projects, current]) => {
      const allProjects = [...projects, ...current]
      const found = allProjects.find(p => p.id === id)
      setProject(found)
      setLoading(false)
    })
    .catch(err => {
      console.error(err)
      setLoading(false)
    })
  }, [id])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (loading) return <div className="section container" style={{minHeight: '100vh'}}>Loading...</div>
  
  if (!project) return (
    <div className="section container" style={{minHeight: '100vh', paddingTop: '120px'}}>
      <h2>Project not found</h2>
      <Link to="/" className="btn-link" style={{marginTop: '2rem'}}>
        Return Home
        <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M11 6H1M1 6L5 2M1 6L5 10"/>
        </svg>
      </Link>
    </div>
  )

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.name,
    "description": project.description,
    "url": window.location.href,
    "author": {
      "@type": "Person",
      "name": "Anirbaan Sarkar"
    }
  }

  return (
    <>
      <Helmet>
        <title>{project.name} — anonically22</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={`${project.name} — anonically22`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.img} />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <article className="case-study reveal is-visible">
        <header className="case-study-hero">
          <div className="container">
            <Link to="/" className="btn-link back-link">
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M11 6H1M1 6L5 2M1 6L5 10"/>
              </svg>
              Back to Index
            </Link>
            
            <div className="case-study-meta">
              <span>{project.year}</span>
              <span className="separator">—</span>
              <span className="category">{project.type}</span>
            </div>
            
            <h1 className="case-study-title">{project.name}</h1>
            <p className="case-study-tagline">{project.tagline}</p>
            
            <div className="case-study-tech-list">
              {project.tech.map(t => (
                <span key={t} className="tech-item">{t}</span>
              ))}
            </div>

            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-link external-link">
                Visit Live Site
                <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M1 11L11 1M11 1H4M11 1V8"/>
                </svg>
              </a>
            )}
          </div>
        </header>

        <div className="case-study-image-hero">
          <div className="container">
            <img src={project.img} alt={`Hero representation of ${project.name}`} className="editorial-img" />
          </div>
        </div>

        <div className="case-study-content container">
          <div className="cs-grid">
            <aside className="cs-sidebar">
              <div className="cs-sidebar-sticky">
                <h3>At a glance</h3>
                <p>{project.description}</p>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-link external-link" style={{marginTop: '1rem'}}>
                    Source Code
                    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M1 11L11 1M11 1H4M11 1V8"/>
                    </svg>
                  </a>
                )}
              </div>
            </aside>

            <div className="cs-main">
              <section className="cs-section">
                <h2>The Problem</h2>
                <p>{project.problem}</p>
              </section>

              <section className="cs-section">
                <h2>Approach</h2>
                <p>{project.approach}</p>
              </section>

              <section className="cs-section">
                <h2>Design Decisions</h2>
                <p>{project.designDecisions}</p>
              </section>

              <section className="cs-section">
                <h2>Technical Architecture</h2>
                <p>{project.technicalArchitecture}</p>
              </section>

              <section className="cs-section">
                <h2>Challenges</h2>
                <p>{project.challenges}</p>
              </section>

              <section className="cs-section">
                <h2>Outcome & Learnings</h2>
                <p>{project.outcome}</p>
                <div className="key-learning-box">
                  <strong>Key Learning:</strong> {project.keyLearnings}
                </div>
              </section>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
