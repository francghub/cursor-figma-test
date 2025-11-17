import './UndesigningSection.css'
import FadeInSection from './FadeInSection'
import BombIcon from './BombIcon'
import ScrollArrow from './ScrollArrow'

function UndesigningSection() {
  return (
    <section id="undesigning" className="section section-white">
      <div className="section-content">
        <ScrollArrow />
        <FadeInSection>
          <h2 className="section-title">Undesigning infrastructures.</h2>
          <div className="undesigning-text">
            <p>
              The aim is to explore how Wikimedia's ongoing Wikibase Infrastructure design and expansion of Wikidata can support practices in art publishing, documenting, and archiving, especially focusing upon experimental publishing practices. This supplement, of Wikidata formats and some time used tools, open source and maintained by a larger, dedicated to supporting and promoting digital production and preservation.
            </p>
            <p>
              Since Wikimedia's format has made possible new infrastructure-building practices in the culture of digital artistic documentation and publication efforts of artists who seek sustainable non-profit modes of online preservation of their diverse practice. This has not only been important for artists' autonomous, non-institutional documentation, but also alternative forms of linking and indexing artistic works together in support of new modular and networked forms of publishing.
            </p>
            <p>
              These are, as one might imagine, important aspects of art-documenting practices which had previously relied upon limited means of digital styloglyptic documenting in using archives in digital artistic documentation, and eventually design methods, artistic digital production methods, ways of artists, practices in the Portuguese areas of digital styloglyptic affirmation, digital artist-made design methods, and eventually self-published forms of aesthetic ideas and critical works. This has evolved to the art world of thinking in other spaces that inform such varied approaches to independent publishing, experimental publishing, art writing, and self-publishing as performative methods and performance.
            </p>
          </div>
          <BombIcon size={36} color="#000000" />
        </FadeInSection>
        <ScrollArrow />
      </div>
    </section>
  )
}

export default UndesigningSection

