import './ProjectCard.css'
import FadeInSection from './FadeInSection'
import BombLogo from './BombLogo'
import asset03 from '../assets/asset03.jpg'

function TranscriptsSection() {
  return (
    <section id="transcripts" className="section section-dark parallax-section" style={{ backgroundImage: `url(${asset03})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
      <FadeInSection>
        <div className="project-card" style={{ color: '#ffffff' }}>
          <div className="project-label">Transcripts</div>
          <h1 className="project-title">
            Transcripts from activists, journalists, hackers, archivists, and developers.
          </h1>
          <a href="#" className="project-link">View Transcripts</a>
          <BombLogo animated={true} size={80} />
        </div>
      </FadeInSection>
    </section>
  )
}

export default TranscriptsSection
