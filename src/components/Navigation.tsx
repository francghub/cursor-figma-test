import { useState, useEffect } from 'react'
import './Navigation.css'
import Logo from './Logo.svg'

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#header" onClick={(e) => { e.preventDefault(); scrollToSection('header') }}>
            <img src={Logo} alt="Research Archive Logo" className="logo-svg" />
          </a>
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <li><a href="#research" onClick={(e) => { e.preventDefault(); scrollToSection('research') }}>Research</a></li>
          <li><a href="#padliography" onClick={(e) => { e.preventDefault(); scrollToSection('padliography') }}>Padliography</a></li>
          <li><a href="#transcripts" onClick={(e) => { e.preventDefault(); scrollToSection('transcripts') }}>Transcripts</a></li>
          <li><a href="#amro" onClick={(e) => { e.preventDefault(); scrollToSection('amro') }}>AMRO</a></li>
          <li><a href="#arts" onClick={(e) => { e.preventDefault(); scrollToSection('arts') }}>Arts</a></li>
          <li><a href="#library" onClick={(e) => { e.preventDefault(); scrollToSection('library') }}>Library</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation

