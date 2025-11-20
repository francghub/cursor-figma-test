import './LibrarySection.css'
import FadeInSection from './FadeInSection'
import BombLogo from './BombLogo'
import booksImage from '../assets/books.png'

function LibrarySection() {
  return (
    <section 
      id="library" 
      className="section section-dark parallax-section" 
      style={{ 
        backgroundImage: `url(${booksImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        position: 'relative' 
      }}
    >
      <FadeInSection>
        <div className="project-card" style={{ color: '#ffffff' }}>
          <div className="project-label">Library</div>
          <h1 className="project-title">
            A collection of research materials exploring internet politics, digital activism, and network culture.
          </h1>
          <a href="#" className="section-cta-button">Explore Full Library</a>
          <BombLogo size={80} animated={true} />
        </div>
      </FadeInSection>
    </section>
  )
}

export default LibrarySection
