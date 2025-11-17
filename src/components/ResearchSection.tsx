import './ProjectCard.css'
import FadeInSection from './FadeInSection'

function ResearchSection() {
  return (
    <section id="research" className="section section-dark parallax-section" style={{ backgroundImage: 'url(/images/research.jpg)' }}>
      <FadeInSection>
        <div className="project-card">
          <div className="project-label">Research</div>
          <h1 className="project-title">
            Research printed with<br />
            the Espresso Book Machine (ABC)<br />
            in Amsterdam (NL).
          </h1>
          <a href="#" className="project-link">View Publication</a>
          <div className="scroll-indicator">↓</div>
        </div>
      </FadeInSection>
    </section>
  )
}

export default ResearchSection

