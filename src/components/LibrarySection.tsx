import './LibrarySection.css'
import FadeInSection from './FadeInSection'
import BombLogo from './BombLogo'
import ScrollToTop from './ScrollToTop'

function LibrarySection() {
  return (
    <section id="library" className="section section-white">
      <ScrollToTop />
      <div className="section-content library-content" style={{ color: '#000000' }}>
        <FadeInSection>
          <h2 className="section-title">Library</h2>
          <div className="library-grid">
            <div className="library-item" style={{ backgroundColor: '#B86A3A' }}>
              <div className="library-item-overlay">Item 1</div>
            </div>
            <div className="library-item" style={{ backgroundColor: '#2E3A57' }}>
              <div className="library-item-overlay">Item 2</div>
            </div>
            <div className="library-item" style={{ backgroundColor: '#32A8A1' }}>
              <div className="library-item-overlay">Item 3</div>
            </div>
            <div className="library-item" style={{ backgroundColor: '#D0D7DD' }}>
              <div className="library-item-overlay">Item 4</div>
            </div>
            <div className="library-item" style={{ backgroundColor: '#506171' }}>
              <div className="library-item-overlay">Item 5</div>
            </div>
            <div className="library-item" style={{ backgroundColor: '#4EC7B8' }}>
              <div className="library-item-overlay">Item 6</div>
            </div>
          </div>
          <div className="library-cta">
            <h1 className="library-cta-title">
              View / download the project's online resources, videos, ebooks, and documentation generated.
            </h1>
            <a href="#" className="project-link" style={{ color: '#000000', borderColor: '#000000' }}>View Library</a>
          </div>
          <BombLogo animated={true} size={80} />
        </FadeInSection>
      </div>
    </section>
  )
}

export default LibrarySection
