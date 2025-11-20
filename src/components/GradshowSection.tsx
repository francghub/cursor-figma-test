import './ProjectCard.css'
import FadeInSection from './FadeInSection'
import BombLogo from './BombLogo'
import asset02 from '../assets/asset02.png'

function GradshowSection() {
  return (
    <section id="gradshow" className="section section-dark parallax-section" style={{ backgroundImage: `url(${asset02})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
      <FadeInSection>
        <div className="project-card" style={{ color: '#ffffff' }}>
          <div className="project-label">Show</div>
          <h1 className="project-title">
            XPUB Gradshow<br />
            Venue: Slash (Worm) Rotterdam (NL) / Year: 2018<br />
            media.xpub.nl/gradshow-2018-web.mp4
          </h1>
          <a href="#" className="project-link">View Show</a>
          <BombLogo animated={true} size={80} />
        </div>
      </FadeInSection>
    </section>
  )
}

export default GradshowSection
