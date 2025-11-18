import './PadliographySection.css'
import FadeInSection from './FadeInSection'
import LogoStatic from './LogoStatic'
import SectionAnchor from './SectionAnchor'

function PadliographySection() {
  return (
    <section id="padliography" className="section section-yellow" style={{ position: 'relative' }}>
      <div className="section-content">
        <SectionAnchor color="#000000" />
        <FadeInSection>
          <h2 className="section-title">An independent, self-hosted media research practice.</h2>
          <div className="padliography-text">
            <p>
              This research initiative combines alternative publishing, open-source tools, and experimental infrastructures. It investigates how individuals and collectives can work outside centralized platforms while maintaining secure, ethical, and sustainable digital workflows.
            </p>
            <p>
              Running a local server on a Raspberry Pi can be highly useful for small publishing groups—not only for hosting, but also for archiving and collaborative writing. Because the infrastructure is small-scale, affordable, and transparent, it becomes possible to bypass restrictive intellectual property policies.
            </p>
          </div>
          <LogoStatic size={80} color="#000000" />
        </FadeInSection>
      </div>
    </section>
  )
}

export default PadliographySection
