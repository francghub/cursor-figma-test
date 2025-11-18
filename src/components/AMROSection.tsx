import './AMROSection.css'
import FadeInSection from './FadeInSection'
import LogoStatic from './LogoStatic'
import SectionAnchor from './SectionAnchor'

function AMROSection() {
  return (
    <section id="amro" className="section section-purple" style={{ position: 'relative' }}>
      <div className="section-content">
        <SectionAnchor color="#ffffff" />
        <FadeInSection>
          <h2 className="section-title">A collaborative network.</h2>
          <div className="amro-text">
            <p>
              This network brings together designers, artists, activists, technologists, and researchers who explore alternative ways of producing, sharing, and maintaining knowledge. Through different chapters, the project highlights how open-source publishing systems, community infrastructures, and grassroots initiatives contribute to media literacy and digital sovereignty.
            </p>
            <p>
              The collaborative practices documented here were developed across multiple institutions—including the Willem de Kooning Academy, the Piet Zwart Institute, and partners in Rotterdam and beyond.
            </p>
          </div>
          <LogoStatic size={80} color="#ffffff" />
        </FadeInSection>
      </div>
    </section>
  )
}

export default AMROSection
