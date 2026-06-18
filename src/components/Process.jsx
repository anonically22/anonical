import { useEffect, useState } from 'react'

export default function Process() {
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

    const el = document.getElementById('process-section-content')
    if (el) observer.observe(el)
    
    return () => observer.disconnect()
  }, [])

  return (
    <section id="process" className="section section-alt editorial-grid-section">
      <div className="container" id="process-section-content">
        <div className={`editorial-header reveal ${inView ? 'is-visible' : ''}`}>
          <div className="section-label">PROCESS</div>
          <h2 className="editorial-heading">The frameworks that guide the work</h2>
          <p className="editorial-sub">A set of core principles and methodologies that ensure quality, scalability, and impact across all projects.</p>
        </div>

        <div className={`editorial-columns reveal reveal-delay-1 ${inView ? 'is-visible' : ''}`}>
          <div className="editorial-col">
            <h3 className="editorial-col-title">Ship before perfect</h3>
            <p className="editorial-col-desc">The only way to test a hypothesis is to put it in the hands of users. Polishing a flawed concept in private is a waste of engineering bandwidth. Launch, observe, and iterate.</p>
          </div>
          <div className="editorial-col">
            <h3 className="editorial-col-title">Systems over pages</h3>
            <p className="editorial-col-desc">I don't design isolated screens. I build cohesive design systems and component libraries. Scalability comes from reusable logic, not duplicated effort.</p>
          </div>
          <div className="editorial-col">
            <h3 className="editorial-col-title">Research matters</h3>
            <p className="editorial-col-desc">Assumptions are dangerous. Every major architectural decision must be backed by either direct user feedback, established heuristics, or rigorous performance testing.</p>
          </div>
          <div className="editorial-col">
            <h3 className="editorial-col-title">Clarity wins</h3>
            <p className="editorial-col-desc">Clever code that cannot be read is bad code. Overly complex UIs confuse users. The goal is always to reduce friction—both for the user navigating the product, and the developer reading the codebase.</p>
          </div>
        </div>

        <div className={`editorial-stats reveal reveal-delay-2 ${inView ? 'is-visible' : ''}`}>
          <div className="editorial-stat">
            <div className="editorial-stat-num">01</div>
            <div className="editorial-stat-label">(Iteration Velocity)</div>
          </div>
          <div className="editorial-stat">
            <div className="editorial-stat-num">02</div>
            <div className="editorial-stat-label">(Architecture)</div>
          </div>
          <div className="editorial-stat">
            <div className="editorial-stat-num">03</div>
            <div className="editorial-stat-label">(Validation)</div>
          </div>
          <div className="editorial-stat">
            <div className="editorial-stat-num">04</div>
            <div className="editorial-stat-label">(Legibility)</div>
          </div>
        </div>
      </div>
    </section>
  )
}
