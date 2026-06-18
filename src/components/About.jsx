import { useEffect, useState } from 'react'

export default function About() {
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

    const el = document.getElementById('about-section-content')
    if (el) observer.observe(el)
    
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="section editorial-grid-section overlap-prev">
      <div className="container" id="about-section-content">
        <div className={`editorial-header reveal ${inView ? 'is-visible' : ''}`}>
          <div className="section-label">RESEARCH</div>
          <h2 className="editorial-heading">I build software that respects the user's time and intelligence.</h2>
          <p className="editorial-sub">I operate at the intersection of product engineering and design research. This isn't just about writing code; it's about architecting systems that are robust, legible, and intentionally designed.</p>
        </div>

        <div className={`editorial-columns reveal reveal-delay-1 ${inView ? 'is-visible' : ''}`}>
          <div className="editorial-col">
            <h3 className="editorial-col-title">Engineering</h3>
            <p className="editorial-col-desc">My work spans building intelligent interfaces, structuring complex datasets, and experimenting with new interaction models.</p>
          </div>
          <div className="editorial-col">
            <h3 className="editorial-col-title">Architecture</h3>
            <p className="editorial-col-desc">I believe in writing code that can be read like a well-edited manuscript—no unnecessary abstractions, no bloated dependencies.</p>
          </div>
          <div className="editorial-col">
            <h3 className="editorial-col-title">Research</h3>
            <p className="editorial-col-desc">Currently, my research focuses on how we can use generative models to augment, rather than replace, the creative process.</p>
          </div>
        </div>

        <div className={`editorial-stats reveal reveal-delay-2 ${inView ? 'is-visible' : ''}`}>
          <div className="editorial-stat">
            <div className="editorial-stat-num">4+</div>
            <div className="editorial-stat-label">(Years of engineering)</div>
          </div>
          <div className="editorial-stat">
            <div className="editorial-stat-num">10+</div>
            <div className="editorial-stat-label">(Products shipped)</div>
          </div>
          <div className="editorial-stat">
            <div className="editorial-stat-num">3</div>
            <div className="editorial-stat-label">(Core disciplines)</div>
          </div>
        </div>
      </div>
    </section>
  )
}
