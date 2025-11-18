import './UndesigningSection.css'
import FadeInSection from './FadeInSection'
import LogoStatic from './LogoStatic'
import SectionAnchor from './SectionAnchor'

function UndesigningSection() {
  return (
    <section id="undesigning" className="section section-white" style={{ position: 'relative' }}>
      <div className="section-content">
        <SectionAnchor color="#000000" />
        <FadeInSection>
          <h2 className="section-title">Unmapping infrastructures.</h2>
          <div className="undesigning-text">
            <p>
              This part of the research examines digital infrastructures that often remain invisible, despite being central to communication, publishing, and artistic work. It highlights how networks, servers, protocols, and content moderation practices shape the way we interact with information.
            </p>
            <p style={{ paddingLeft: '2rem' }}>
              Understanding these systems makes it possible to re-imagine digital tools through more ethical, transparent, and community-oriented approaches.
            </p>
          </div>
          <LogoStatic size={80} color="#000000" />
        </FadeInSection>
      </div>
    </section>
  )
}

export default UndesigningSection
