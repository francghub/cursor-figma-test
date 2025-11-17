import './ProjectCard.css'

function TranscriptsSection() {
  return (
    <section id="transcripts" className="section section-dark parallax-section" style={{ backgroundImage: 'url(/placeholder-transcript.svg)' }}>
      <div className="project-card">
        <div className="project-label">Transcripts</div>
        <h1 className="project-title">
          Transcripts<br />
          from activists, journalists,<br />
          hackers, archivists<br />
          and developers.
        </h1>
        <a href="#" className="project-link">View Archive</a>
        <div className="scroll-indicator">↓</div>
      </div>
    </section>
  )
}

export default TranscriptsSection

