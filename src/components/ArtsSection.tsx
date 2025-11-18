import './ProjectCard.css'
import FadeInSection from './FadeInSection'
import LogoStatic from './LogoStatic'
import SectionAnchor from './SectionAnchor'
import asset04 from '../assets/asset04.jpg'

function ArtsSection() {
  return (
    <section id="arts" className="section section-dark parallax-section" style={{ backgroundImage: `url(${asset04})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
      <SectionAnchor color="#ffffff" />
      <FadeInSection>
        <div className="project-card">
          <div className="project-label">AMRO</div>
          <h1 className="project-title">
            Arts Meet Radical Openness is a festival about technology, hacking, and design experiments, located in Linz (AT).
          </h1>
          <LogoStatic size={80} color="#ffffff" />
        </div>
      </FadeInSection>
    </section>
  )
}

export default ArtsSection
