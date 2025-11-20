import './LibrarySection.css'
import FadeInSection from './FadeInSection'
import BombLogo from './BombLogo'
import BookCarousel from './BookCarousel'

function LibrarySection() {
  return (
    <section id="library" className="section section-white">
      <div className="section-content library-content-wide" style={{ color: '#000000' }}>
        <FadeInSection>
          <h2 className="section-title">Library</h2>
          <p className="library-description">
            Explore our collection of research materials on internet politics, digital activism, 
            and network culture. Drag or swipe to browse through books.
          </p>
        </FadeInSection>
        
        <BookCarousel />
        
        <FadeInSection delay={0.3}>
          <div className="library-cta">
            <h3 className="library-cta-title">
              Access the complete archive of research materials, transcripts, and documentation.
            </h3>
            <a href="#" className="section-cta-button">Explore Full Library</a>
          </div>
          <BombLogo animated={true} size={80} />
        </FadeInSection>
      </div>
    </section>
  )
}

export default LibrarySection
