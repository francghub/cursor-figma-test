import './AMROSection.css'
import FadeInSection from './FadeInSection'
import BombLogo from './BombLogo'
import ScrollToTop from './ScrollToTop'

function AMROSection() {
  return (
    <section id="amro" className="section section-purple">
      <ScrollToTop />
      <div className="section-content" style={{ color: '#ffffff' }}>
        <FadeInSection>
          <h2 className="section-title">A collaborative network.</h2>
          <div className="amro-text">
            <p className="amro-paragraph-1">
              This network brings together designers, artists, activists, technologists, and researchers who explore alternative ways of producing, sharing, and maintaining knowledge.
            </p>
            <p className="amro-paragraph-2">
              Through different chapters, the project highlights how open-source publishing systems, community infrastructures, and grassroots initiatives contribute to media literacy and digital sovereignty. The collaborative practices documented here were developed across multiple institutions—including the Willem de Kooning Academy, the Piet Zwart Institute, and partners in Rotterdam and beyond.
            </p>
          </div>
          <BombLogo animated={true} size={80} />
        </FadeInSection>
      </div>
    </section>
  )
}

export default AMROSection
