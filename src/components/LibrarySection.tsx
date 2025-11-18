import './LibrarySection.css'
import FadeInSection from './FadeInSection'
import LogoStatic from './LogoStatic'
import SectionAnchor from './SectionAnchor'

function LibrarySection() {
  return (
    <section id="library" className="section section-white" style={{ position: 'relative' }}>
      <div className="section-content library-content">
        <SectionAnchor color="#000000" />
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
          <LogoStatic size={80} color="#000000" />
        </div>
        </FadeInSection>
      </div>
    </section>
  )
}

export default LibrarySection
