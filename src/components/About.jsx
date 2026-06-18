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
    <section id="about" className="section">
      <div className="container" id="about-section-content">
        <div className={`section-label reveal ${inView ? 'is-visible' : ''}`}>About</div>
        <h2 className={`section-heading reveal ${inView ? 'is-visible' : ''}`}>Product-first. Motion-rich. Builder by default.</h2>

        <div className="about-grid">
          <div className={`about-prose reveal reveal-delay-1 ${inView ? 'is-visible' : ''}`}>
            <p>I build things under the alias anonically22 — a deliberate split from the formal portfolio. This is the experimental side: messier, more opinionated, and closer to how I actually think.</p>
            <p>My background spans full-stack engineering, AI/ML research, and IP law — which means I'm as comfortable in a codebase as I am reading a patent. I like problems that sit at intersections.</p>
            <p>Currently in my final year at Techno India University. When I'm not shipping, I'm probably writing research or taking photographs.</p>
          </div>

          <div className="about-stats">
            <div className={`stat-block reveal reveal-delay-1 ${inView ? 'is-visible' : ''}`}>
              <div className="stat-number">4+</div>
              <div className="stat-label">Years building</div>
            </div>
            <div className={`stat-block reveal reveal-delay-2 ${inView ? 'is-visible' : ''}`}>
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects shipped</div>
            </div>
            <div className={`stat-block reveal reveal-delay-3 ${inView ? 'is-visible' : ''}`}>
              <div className="stat-number">2</div>
              <div className="stat-label">Papers published</div>
            </div>
            <div className={`stat-block reveal reveal-delay-4 ${inView ? 'is-visible' : ''}`}>
              <div className="stat-number">3</div>
              <div className="stat-label">Domains: Dev, Design, Research</div>
            </div>
          </div>
        </div>

        <div className={`divider reveal reveal-delay-4 ${inView ? 'is-visible' : ''}`}></div>
      </div>
    </section>
  )
}
