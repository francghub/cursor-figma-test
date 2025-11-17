import './ProjectCard.css'
import FadeInSection from './FadeInSection'
import BombIcon from './BombIcon'
import ScrollArrow from './ScrollArrow'
import asset01 from '../assets/asset01.jpg'

function ResearchSection() {
  return (
    <section id="research" className="section section-dark parallax-section" style={{ backgroundImage: `url(${asset01})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <FadeInSection>
        <div className="project-card">
          <div className="project-label">Research</div>
          <h1 className="project-title">
            Research printed with<br />
            the Espresso Book Machine (ABC)<br />
            in Amsterdam (NL).
          </h1>
          <a href="#" className="project-link">View Publication</a>
          <BombIcon size={36} color="#ffffff" />
        </div>
      </FadeInSection>
      <ScrollArrow />
    </section>
  )
}

export default ResearchSection

