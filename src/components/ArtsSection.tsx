import './ProjectCard.css'
import FadeInSection from './FadeInSection'
import LogoAnimated from './LogoAnimated'
import SectionAnchor from './SectionAnchor'
import asset04 from '../assets/asset04.jpg'

function ArtsSection() {
  return (
    <section id="arts" className="section section-dark parallax-section" style={{ backgroundImage: `url(${asset04})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
      <SectionAnchor />
      <FadeInSection>
        <div className="project-card" style={{ color: '#ffffff' }}>
          <div className="project-label">AMRO</div>
          <h1 className="project-title">
            Arts Meet Radical Openness is a festival about technology, hacking, and design experiments, located in Linz (AT).
          </h1>
          <LogoAnimated size={80} />
        </div>
      </FadeInSection>
    </section>
  )
}

export default ArtsSection
