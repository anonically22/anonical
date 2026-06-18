import { useEffect, useState, useRef } from 'react'

export default function Hero() {
  const [showContent, setShowContent] = useState(false)
  const [subtitleIdx, setSubtitleIdx] = useState(0)
  const [subtitleState, setSubtitleState] = useState('in')
  const [hoverText, setHoverText] = useState(null)
  const nameRef = useRef(null)

  const subtitles = ["builder.", "designer.", "researcher."]
  const nameStr = "anonically22"
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setShowContent(true)
    } else {
      setTimeout(() => setShowContent(true), nameStr.length * 60 + 200)
    }

    let subInterval
    if (!prefersReducedMotion) {
      subInterval = setInterval(() => {
        setSubtitleState('out')
        setTimeout(() => {
          setSubtitleIdx((prev) => (prev + 1) % subtitles.length)
          setSubtitleState('pre-in')
          setTimeout(() => setSubtitleState('in'), 50)
        }, 300)
      }, 2200)
    }

    return () => clearInterval(subInterval)
  }, [])

  const handleMouseEnter = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (nameRef.current && nameRef.current._interval) {
      clearInterval(nameRef.current._interval)
    }
    const targetText = "Anirbaan Sarkar"
    let iteration = 0
    const interval = setInterval(() => {
      let currentText = ""
      for (let i = 0; i < targetText.length; i++) {
        if (i < Math.floor(iteration)) {
          currentText += targetText[i]
        } else {
          currentText += chars[Math.floor(Math.random() * chars.length)]
        }
      }
      setHoverText(currentText)
      
      if (iteration >= targetText.length) clearInterval(interval)
      iteration += 1 / 2
    }, 30)
    
    if (nameRef.current) nameRef.current._interval = interval
  }

  const handleMouseLeave = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (nameRef.current && nameRef.current._interval) {
      clearInterval(nameRef.current._interval)
    }
    const targetText = "anonically22"
    let iteration = 0
    const interval = setInterval(() => {
      let currentText = ""
      for (let i = 0; i < targetText.length; i++) {
        if (i < Math.floor(iteration)) {
          currentText += targetText[i]
        } else {
          currentText += chars[Math.floor(Math.random() * chars.length)]
        }
      }
      setHoverText(currentText)
      
      if (iteration >= targetText.length) {
        clearInterval(interval)
        setHoverText(null)
      }
      iteration += 1 / 2
    }, 30)
    
    if (nameRef.current) nameRef.current._interval = interval
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-label">// creative lab</div>
        <h1 
          className="hero-name" 
          aria-label="anonically22"
          ref={nameRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {hoverText !== null ? (
            <span>{hoverText}</span>
          ) : (
            nameStr.split('').map((char, i) => (
              <span
                key={i}
                style={{
                  display: 'inline-block',
                  animation: showContent ? 'none' : `fadeInUp 400ms ease-out ${i * 60}ms forwards`,
                  opacity: showContent ? 1 : 0
                }}
              >
                {char}
              </span>
            ))
          )}
        </h1>
        <div className="hero-subtitle-container">
          <div 
            className="hero-subtitle"
            style={{
              opacity: subtitleState === 'in' ? 1 : 0,
              transform: subtitleState === 'in' ? 'translateY(0)' : subtitleState === 'out' ? 'translateY(-8px)' : 'translateY(8px)',
              transition: 'opacity 300ms ease-out, transform 300ms ease-out'
            }}
          >
            {subtitles[subtitleIdx]}
          </div>
        </div>
        <p className={`hero-desc ${showContent ? 'show' : ''}`}>
          Developer &amp; designer. The experimental side of Anirbaan Sarkar.
        </p>
        <div className={`hero-actions ${showContent ? 'show' : ''}`}>
          <a href="#working" className="btn-link">
            See what I'm building
            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M1 5L11 5M11 5L7 1M11 5L7 9"/>
            </svg>
          </a>
          <a href="https://anirbaansarkar.vercel.app" target="_blank" className="btn-link" rel="noopener noreferrer">
            View formal portfolio
            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M1 11L11 1M11 1H4M11 1V8"/>
            </svg>
          </a>
        </div>
      </div>
      <div className={`scroll-indicator ${showContent && window.scrollY <= 100 ? '' : 'hidden'}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
