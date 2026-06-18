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
    <section id="process" className="section section-alt">
      <div className="container" id="process-section-content">
        <div className={`section-label reveal ${inView ? 'is-visible' : ''}`}>How I work</div>
        <h2 className={`section-heading reveal ${inView ? 'is-visible' : ''}`}>From fuzzy brief to shipped product</h2>

        <div className="process-scroll-container">
          <div className={`process-card reveal reveal-delay-1 ${inView ? 'is-visible' : ''}`}>
            <div className="process-num">01</div>
            <h3 className="process-name">Understand</h3>
            <p className="process-desc">I start by reading everything — briefs, existing code, competitor sites, user complaints. The goal is to know the problem better than whoever brought it to me.</p>
          </div>
          <div className={`process-card reveal reveal-delay-2 ${inView ? 'is-visible' : ''}`}>
            <div className="process-num">02</div>
            <h3 className="process-name">Design</h3>
            <p className="process-desc">Wireframes stay ugly on purpose. I'm testing logic, not aesthetics. The palette and motion come after the structure earns them.</p>
          </div>
          <div className={`process-card reveal reveal-delay-3 ${inView ? 'is-visible' : ''}`}>
            <div className="process-num">03</div>
            <h3 className="process-name">Build</h3>
            <p className="process-desc">Component-first, data-driven where possible. I write the parts that can be swapped out — JSON configs, design tokens, modular sections — so the thing can outlast my involvement.</p>
          </div>
          <div className={`process-card reveal reveal-delay-4 ${inView ? 'is-visible' : ''}`}>
            <div className="process-num">04</div>
            <h3 className="process-name">Ship &amp; Refine</h3>
            <p className="process-desc">Launch is lap one. I watch how it performs, what breaks, what users ignore. The first version is a hypothesis. The second is usually better.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
