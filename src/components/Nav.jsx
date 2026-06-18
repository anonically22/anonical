import { useEffect, useState } from 'react'
import TeaCup from './TeaCup'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [labOpen, setLabOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`} id="nav">
      <div className="nav-brand-container">
        <TeaCup className="nav-tea" />
        <a href="#" className="nav-brand">anonically22</a>
      </div>
      <div className="nav-links">
        <a href="#projects" className="nav-link">working</a>
        <a href="#about" className="nav-link">about</a>
        <a href="#process" className="nav-link">process</a>
        <a href="#projects" className="nav-link">projects</a>
      </div>
    </nav>
  )
}
