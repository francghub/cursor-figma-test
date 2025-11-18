import './ProjectCard.css'
import FadeInSection from './FadeInSection'
import BombLogo from './BombLogo'
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
            Venue: Slash (Worm) Rotterdam (NL)<br />
            Year: 2018<br />
            media.xpub.nl/gradshow-2018-web.mp4
          </h1>
          <BombLogo size={80} color="#ffffff" animated={false} />
        </div>
      </FadeInSection>
      <ScrollArrow />
    </section>
  )
}

export default GradshowSection

