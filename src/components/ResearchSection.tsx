import './ProjectCard.css'
import FadeInSection from './FadeInSection'
import BombLogo from './BombLogo'
import ScrollToTop from './ScrollToTop'
import asset01 from '../assets/asset01.jpg'

function ResearchSection() {
  return (
    <section id="research" className="section section-dark parallax-section" style={{ backgroundImage: `url(${asset01})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
      <ScrollToTop />
      <FadeInSection>
        <div className="project-card" style={{ color: '#ffffff' }}>
          <div className="project-label">Research</div>
          <h1 className="project-title">
            Research printed with the Espresso Book Machine @ The American Book Center (ABC) in Amsterdam (NL), 2018.
          </h1>
          <a href="#" className="project-link">View Publication</a>
          <BombLogo animated={true} size={80} />
        </div>
      </FadeInSection>
    </section>
  )
}

export default ResearchSection
