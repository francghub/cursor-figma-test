import './ProjectCard.css'
import FadeInSection from './FadeInSection'
import BombLogo from './BombLogo'
import ScrollArrow from './ScrollArrow'
import asset04 from '../assets/asset04.jpg'

function ArtsSection() {
  return (
    <section id="arts" className="section section-dark parallax-section" style={{ backgroundImage: `url(${asset04})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <FadeInSection>
        <div className="project-card">
          <div className="project-label">AMRO</div>
          <h1 className="project-title">
            Arts Meet Radical Openness is a festival about technology, hacking, and design experiments, located in Linz (AT).
          </h1>
          <BombLogo size={80} color="#ffffff" animated={false} />
        </div>
      </FadeInSection>
      <ScrollArrow />
    </section>
  )
}

export default ArtsSection

