import './ProjectCard.css'
import FadeInSection from './FadeInSection'
import LogoStatic from './LogoStatic'
import SectionAnchor from './SectionAnchor'
import asset03 from '../assets/asset03.jpg'

function TranscriptsSection() {
  return (
    <section id="transcripts" className="section section-dark parallax-section" style={{ backgroundImage: `url(${asset03})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
      <SectionAnchor color="#ffffff" />
      <FadeInSection>
        <div className="project-card">
          <div className="project-label">Transcripts</div>
          <h1 className="project-title">
            Transcripts from activists, journalists, hackers, archivists, and developers.
          </h1>
          <LogoStatic size={80} color="#ffffff" />
        </div>
      </FadeInSection>
    </section>
  )
}

export default TranscriptsSection
