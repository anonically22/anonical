import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`} id="nav">
      <a href="#" className="nav-logo">anonically22</a>
      <div className="nav-links">
        <a href="#working" className="nav-link">working</a>
        <a href="#about" className="nav-link">about</a>
        <a href="#process" className="nav-link">process</a>
        <a href="#projects" className="nav-link">projects</a>
      </div>
    </nav>
  )
}
