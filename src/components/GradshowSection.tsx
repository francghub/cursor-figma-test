import './ProjectCard.css'
import FadeInSection from './FadeInSection'
import BombIcon from './BombIcon'
import ScrollArrow from './ScrollArrow'
import asset02 from '../assets/asset02.png'

function GradshowSection() {
  return (
    <section id="gradshow" className="section section-dark parallax-section" style={{ backgroundImage: `url(${asset02})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <FadeInSection>
        <div className="project-card">
          <div className="project-label">Show</div>
          <h1 className="project-title">
            XPUB Gradshow<br />
            Venue: Slash (Worm)<br />
            Rotterdam (NL) / Year: 2018<br />
            media: xpub.nl/gradshow-<br />
            2018-.webm/p4
          </h1>
          <a href="#" className="project-link">View Archive</a>
          <BombIcon size={36} color="#ffffff" />
        </div>
      </FadeInSection>
      <ScrollArrow />
    </section>
  )
}

export default GradshowSection

