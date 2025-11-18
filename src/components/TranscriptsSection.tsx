import './ProjectCard.css'
import FadeInSection from './FadeInSection'
import BombLogo from './BombLogo'
import ScrollArrow from './ScrollArrow'
import SectionAnchor from './SectionAnchor'
import asset03 from '../assets/asset03.jpg'

function TranscriptsSection() {
  return (
    <section id="transcripts" className="section section-dark parallax-section" style={{ backgroundImage: `url(${asset03})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
      <SectionAnchor darkBackground={true} />
      <FadeInSection>
        <div className="project-card">
          <div className="project-label">Transcripts</div>
          <h1 className="project-title">
            Transcripts from activists, journalists, hackers, archivists, and developers.
          </h1>
          <BombLogo size={80} color="#ffffff" animated={false} />
        </div>
      </FadeInSection>
      <ScrollArrow />
    </section>
  )
}

export default TranscriptsSection

