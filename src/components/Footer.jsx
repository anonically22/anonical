import { useEffect, useState } from 'react'

export default function Footer() {
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

    const el = document.getElementById('footer-content')
    if (el) observer.observe(el)
    
    return () => observer.disconnect()
  }, [])

  return (
    <footer className="footer">
      <div className="container" id="footer-content">
        <div className="footer-grid">
          <div className={`footer-col reveal ${inView ? 'is-visible' : ''}`}>
            <div className="footer-brand-name">anonically22</div>
            <div className="footer-brand-desc">The experimental side of Anirbaan Sarkar.</div>
          </div>
          <div className={`footer-col footer-links-col reveal reveal-delay-1 ${inView ? 'is-visible' : ''}`}>
            <a href="#working" className="footer-link">Working</a>
            <a href="#about" className="footer-link">About</a>
            <a href="#process" className="footer-link">Process</a>
            <a href="/design-system.html" className="footer-link">Design System →</a>
          </div>
          <div className={`footer-col footer-links-col reveal reveal-delay-2 ${inView ? 'is-visible' : ''}`}>
            <a href="https://github.com/anonically22" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub ↗</a>
            <a href="https://twitter.com/anonically22" target="_blank" rel="noopener noreferrer" className="footer-link">Twitter/X ↗</a>
            <a href="https://anirbaansarkar.vercel.app" target="_blank" rel="noopener noreferrer" className="footer-link portfolio">Formal Portfolio →</a>
          </div>
        </div>
        <div className={`divider reveal reveal-delay-3 ${inView ? 'is-visible' : ''}`}></div>
        <div className={`footer-bottom reveal reveal-delay-3 ${inView ? 'is-visible' : ''}`}>
          <div className="footer-copy">© 2025 anonically22 · Built with React</div>
        </div>
      </div>
    </footer>
  )
}
