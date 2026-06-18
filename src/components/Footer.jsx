import { useEffect, useState } from 'react'
import TeaCup from './TeaCup'

export default function Footer() {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        } else {
          setInView(false) // Re-trigger on scroll
        }
      },
      { threshold: 0.1 }
    )

    const el = document.getElementById('footer-brand')
    if (el) observer.observe(el)
    
    return () => observer.disconnect()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer-editorial">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col focus-col">
            <h4 className="footer-label">Current Focus</h4>
            <p className="footer-prose">
              Building intelligent interfaces and researching the intersection of design systems and generative models. Available for select freelance collaborations.
            </p>
          </div>
          
          <div className="footer-col nav-col">
            <h4 className="footer-label">Index</h4>
            <ul className="footer-links">
              <li><a href="/#working">Work</a></li>
              <li><a href="/#about">Research</a></li>
              <li><a href="/#process">Writing</a></li>
              <li><a href="/#projects">Archive</a></li>
            </ul>
          </div>
          
          <div className="footer-col social-col">
            <h4 className="footer-label">Connect</h4>
            <ul className="footer-links">
              <li><a href="https://github.com/anonically22" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://x.com/anonically22" target="_blank" rel="noopener noreferrer">X (Twitter)</a></li>
              <li><a href="mailto:anirbaansarkar22@gmail.com">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-brand" id="footer-brand">
            <h2 className={`oversized-text ${inView ? 'is-visible' : ''}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2vw' }}>
              <TeaCup className="footer-tea" />
              <span>anonically<span className="brand-highlight">22</span></span>
            </h2>
          </div>
          
          <div className="footer-meta-row">
            <p className="copyright">&copy; {new Date().getFullYear()} Anirbaan Sarkar. All rights reserved.</p>
            <button onClick={scrollToTop} className="btn-scroll-top">
              Back to top
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 11V1M6 1L1 6M6 1L11 6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
