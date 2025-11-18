import './ProjectCard.css'
import FadeInSection from './FadeInSection'
import LogoAnimated from './LogoAnimated'
import SectionAnchor from './SectionAnchor'
import asset02 from '../assets/asset02.png'

function GradshowSection() {
  return (
    <section id="gradshow" className="section section-dark parallax-section" style={{ backgroundImage: `url(${asset02})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
      <SectionAnchor />
      <FadeInSection>
        <div className="project-card" style={{ color: '#ffffff' }}>
          <div className="project-label">Show</div>
          <h1 className="project-title">
            XPUB Gradshow<br />
            Venue: Slash (Worm) Rotterdam (NL)<br />
            Year: 2018<br />
            media.xpub.nl/gradshow-2018-web.mp4
          </h1>
          <LogoAnimated size={80} />
        </div>
      </FadeInSection>
    </section>
  )
}

export default GradshowSection
