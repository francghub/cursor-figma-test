import './Header.css'
import FadeInSection from './FadeInSection'
import BombLogo from './BombLogo'
import ScrollToTopArrow from './ScrollToTopArrow'

function Header() {
  return (
    <header id="header" className="header section section-white">
      <ScrollToTopArrow />
      <div className="section-content" style={{ color: '#000000' }}>
        <FadeInSection>
          <h1>The powerful social implications of software.</h1>
        </FadeInSection>
        <FadeInSection delay={0.2}>
          <div className="header-text">
            <p className="header-paragraph-small">
              Publication of <em>Software Studies: Altering Our Code</em> shows how open-source tools, self-hosting, and independent infrastructures allow cultural workers to rethink the politics of media.
            </p>
            <p className="header-paragraph-large">
              By exploring issues such as platform centralization, digital safety, and the ways software shapes society, the project examines how alternative tools give individuals greater autonomy and control over information sharing.
            </p>
          </div>
        </FadeInSection>
        <BombLogo animated={true} size={80} />
      </div>
    </header>
  )
}

export default Header
