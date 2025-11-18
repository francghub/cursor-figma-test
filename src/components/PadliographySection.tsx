import './PadliographySection.css'
import FadeInSection from './FadeInSection'
import BombLogo from './BombLogo'
import ScrollToTopArrow from './ScrollToTopArrow'

function PadliographySection() {
  return (
    <section id="padliography" className="section section-yellow">
      <ScrollToTopArrow />
      <div className="section-content" style={{ color: '#000000' }}>
        <FadeInSection>
          <h2 className="section-title">An independent, self-hosted media research practice.</h2>
          <div className="padliography-text">
            <p className="section-paragraph-small">
              This research initiative combines alternative publishing, open-source tools, and experimental infrastructures.
            </p>
            <p className="section-paragraph-large">
              It investigates how individuals and collectives can work outside centralized platforms while maintaining secure, ethical, and sustainable digital workflows. Running a local server on a Raspberry Pi can be highly useful for small publishing groups—not only for hosting, but also for archiving and collaborative writing. Because the infrastructure is small-scale, affordable, and transparent, it becomes possible to bypass restrictive intellectual property policies.
            </p>
          </div>
          <BombLogo animated={true} size={80} />
        </FadeInSection>
      </div>
    </section>
  )
}

export default PadliographySection
