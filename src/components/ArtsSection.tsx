import './ProjectCard.css'
import FadeInSection from './FadeInSection'
import BombIcon from './BombIcon'
import ScrollArrow from './ScrollArrow'
import asset04 from '../assets/asset04.jpg'

function ArtsSection() {
  return (
    <section id="arts" className="section section-dark parallax-section" style={{ backgroundImage: `url(${asset04})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <FadeInSection>
        <div className="project-card">
          <div className="project-label">AMRO</div>
          <h1 className="project-title">
            Arts Meet Radical Openess<br />
            is a festival about technology,<br />
            hacking and design experiments<br />
            located in Linz (AU).
          </h1>
          <div className="project-author">FRANC GONZÁLEZ</div>
          <a href="#" className="project-link">Learn More</a>
          <BombIcon size={36} color="#ffffff" />
        </div>
      </FadeInSection>
      <ScrollArrow />
    </section>
  )
}

export default ArtsSection

