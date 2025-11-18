import './UndesigningSection.css'
import FadeInSection from './FadeInSection'
import LogoAnimated from './LogoAnimated'

function UndesigningSection() {
  return (
    <section id="undesigning" className="section section-white" style={{ position: 'relative' }}>
      <LogoAnimated size={24} className="section-anchor" />
      <div className="section-content">
        <FadeInSection>
          <h2 className="section-title">Unmapping infrastructures.</h2>
          <div className="undesigning-text">
            <p className="paragraph-normal">
              This part of the research examines digital infrastructures that often remain invisible, despite being central to communication, publishing, and artistic work. It highlights how networks, servers, protocols, and content moderation practices shape the way we interact with information.
            </p>
            <p className="paragraph-indented">
              Understanding these systems makes it possible to re-imagine digital tools through more ethical, transparent, and community-oriented approaches.
            </p>
          </div>
          <LogoAnimated size={80} />
        </FadeInSection>
      </div>
    </section>
  )
}

export default UndesigningSection
