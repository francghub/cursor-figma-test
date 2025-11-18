import './ProjectCard.css'
import FadeInSection from './FadeInSection'
import BombLogo from './BombLogo'
import ScrollToTopArrow from './ScrollToTopArrow'
import CTAButton from './CTAButton'
import asset04 from '../assets/asset04.jpg'

function ArtsSection() {
  return (
    <section id="arts" className="section section-dark parallax-section" style={{ backgroundImage: `url(${asset04})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
      <ScrollToTopArrow />
      <FadeInSection>
        <div className="project-card" style={{ color: '#ffffff' }}>
          <div className="project-label">AMRO</div>
          <h1 className="project-title">
            Arts Meet Radical Openness is a festival about technology, hacking, and design experiments, located in Linz (AT).
          </h1>
          <CTAButton text="Learn More" />
          <BombLogo animated={true} size={80} />
        </div>
      </FadeInSection>
    </section>
  )
}

export default ArtsSection
