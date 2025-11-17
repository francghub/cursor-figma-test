import './ProjectCard.css'

function ArtsSection() {
  return (
    <section id="arts" className="section section-dark parallax-section" style={{ backgroundImage: 'url(/placeholder-arts.svg)' }}>
      <div className="project-card">
        <div className="project-label">AMRO</div>
        <h1 className="project-title">
          Arts Meet Radical Openess<br />
          is a festival about technology,<br />
          hacking and design experiments<br />
          located in Linz (AU).
        </h1>
        <div className="project-author">FRANC GONZÁLEZ</div>
        <a href="#" className="project-link">Learn More</a>
        <div className="scroll-indicator">↓</div>
      </div>
    </section>
  )
}

export default ArtsSection

