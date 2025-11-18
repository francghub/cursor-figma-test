import './UndesigningSection.css'
import FadeInSection from './FadeInSection'
import BombLogo from './BombLogo'
import ScrollToTopArrow from './ScrollToTopArrow'

function UndesigningSection() {
  return (
    <section id="undesigning" className="section section-white">
      <ScrollToTopArrow />
      <div className="section-content" style={{ color: '#000000' }}>
        <FadeInSection>
          <h2 className="section-title">Unmapping infrastructures.</h2>
          <div className="undesigning-text">
            <p className="section-paragraph-small">
              This part of the research examines digital infrastructures that often remain invisible, despite being central to communication, publishing, and artistic work.
            </p>
            <p className="section-paragraph-large">
              It highlights how networks, servers, protocols, and content moderation practices shape the way we interact with information. Understanding these systems makes it possible to re-imagine digital tools through more ethical, transparent, and community-oriented approaches.
            </p>
          </div>
          <BombLogo animated={true} size={80} />
        </FadeInSection>
      </div>
    </section>
  )
}

export default UndesigningSection
