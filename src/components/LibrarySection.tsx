import './LibrarySection.css'
import FadeInSection from './FadeInSection'

function LibrarySection() {
  return (
    <section id="library" className="section section-white">
      <div className="section-content library-content">
        <div className="section-nav">↑</div>
        <FadeInSection>
          <h2 className="section-title">Library</h2>
          <div className="library-grid">
          <div className="library-item" style={{ backgroundColor: '#8B4513' }}>
            <div className="library-item-overlay">Item 1</div>
          </div>
          <div className="library-item" style={{ backgroundColor: '#2C3E50' }}>
            <div className="library-item-overlay">Item 2</div>
          </div>
          <div className="library-item" style={{ backgroundColor: '#1ABC9C' }}>
            <div className="library-item-overlay">Item 3</div>
          </div>
          <div className="library-item" style={{ backgroundColor: '#95A5A6' }}>
            <div className="library-item-overlay">Item 4</div>
          </div>
          <div className="library-item" style={{ backgroundColor: '#34495E' }}>
            <div className="library-item-overlay">Item 5</div>
          </div>
          <div className="library-item" style={{ backgroundColor: '#7F8C8D' }}>
            <div className="library-item-overlay">Item 6</div>
          </div>
        </div>
        <div className="library-cta">
          <h1 className="library-cta-title">
            View / download<br />
            the project's online: videos,<br />
            ebooks, and documentation<br />
            generated.
          </h1>
          <a href="#" className="project-link">View Library</a>
        </div>
        </FadeInSection>
        <div className="section-nav">↓</div>
      </div>
    </section>
  )
}

export default LibrarySection

