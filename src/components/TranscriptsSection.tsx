import './ProjectCard.css'
import FadeInSection from './FadeInSection'
import BombIcon from './BombIcon'
import ScrollArrow from './ScrollArrow'
import asset03 from '../assets/asset03.jpg'

function TranscriptsSection() {
  return (
    <section id="transcripts" className="section section-dark parallax-section" style={{ backgroundImage: `url(${asset03})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <FadeInSection>
        <div className="project-card">
          <div className="project-label">Transcripts</div>
          <h1 className="project-title">
            Transcripts<br />
            from activists, journalists,<br />
            hackers, archivists<br />
            and developers.
          </h1>
          <a href="#" className="project-link">View Archive</a>
          <BombIcon size={36} color="#ffffff" />
        </div>
      </FadeInSection>
      <ScrollArrow />
    </section>
  )
}

export default TranscriptsSection

