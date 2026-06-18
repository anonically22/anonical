import { useEffect, useState } from 'react'

export default function Other() {
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

    const el = document.getElementById('other-section-content')
    if (el) observer.observe(el)
    
    return () => observer.disconnect()
  }, [])

  return (
    <section id="other" className="section editorial-grid-section">
      <div className="container" id="other-section-content">
        <div className={`editorial-header reveal ${inView ? 'is-visible' : ''}`}>
          <div className="section-label">OTHER</div>
          <h2 className="editorial-heading">Your future section title here</h2>
          <p className="editorial-sub">A description of what this section is about can be placed right here to give users context.</p>
        </div>

        <div className={`editorial-columns reveal reveal-delay-1 ${inView ? 'is-visible' : ''}`}>
          <div className="editorial-col">
            <h3 className="editorial-col-title">Column One</h3>
            <p className="editorial-col-desc">Details and context for the first column. This follows the editorial grid layout you requested.</p>
          </div>
          <div className="editorial-col">
            <h3 className="editorial-col-title">Column Two</h3>
            <p className="editorial-col-desc">Details and context for the second column. Replace this content when you are ready.</p>
          </div>
          <div className="editorial-col">
            <h3 className="editorial-col-title">Column Three</h3>
            <p className="editorial-col-desc">Details and context for the third column. This grid is fully responsive.</p>
          </div>
        </div>

        <div className={`editorial-stats reveal reveal-delay-2 ${inView ? 'is-visible' : ''}`}>
          <div className="editorial-stat">
            <div className="editorial-stat-num">X</div>
            <div className="editorial-stat-label">(Data Point 1)</div>
          </div>
          <div className="editorial-stat">
            <div className="editorial-stat-num">Y</div>
            <div className="editorial-stat-label">(Data Point 2)</div>
          </div>
          <div className="editorial-stat">
            <div className="editorial-stat-num">Z</div>
            <div className="editorial-stat-label">(Data Point 3)</div>
          </div>
        </div>
      </div>
    </section>
  )
}
