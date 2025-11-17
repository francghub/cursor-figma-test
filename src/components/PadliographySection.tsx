import './PadliographySection.css'
import FadeInSection from './FadeInSection'

function PadliographySection() {
  return (
    <section id="padliography" className="section section-yellow">
      <div className="section-content padliography-content">
        <div className="section-nav">↑</div>
        <FadeInSection>
          <h2 className="section-title">An independent, self-hosted, media research</h2>
          <div className="padliography-text">
            <p>
              Padliography is a portmanteau of the words "pad" and "bibliography." Throughout the year, we create Etherpads based upon specific themes, usually a type of publication, technology, or sort of cultural-expression space that is potentially important. We call each of these pads a "Padliography," a sort of research collection that is web-native and continuously updated.
            </p>
            <p>
              Padliography is currently run at Padpadascha that is currently run by the Experimental Publishing program at Piet Zwart Institute. Established to act in terms of open-source media and research available, to both function together as an archive, following the model of a Raspberry Pi from file hosts available. One of the disadvantages of using this Raspberry Pi from file hosts available. One of the disadvantages of using this Raspberry Pi model is that server issues result in greater loss of accessibility to others, resulting in greater costs of use. This is especially a problem with projects such as Padliography that are aimed at being accessible and free.
            </p>
          </div>
        </FadeInSection>
        <div className="section-nav">↓</div>
      </div>
    </section>
  )
}

export default PadliographySection

