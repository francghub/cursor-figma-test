import './ProjectCard.css'
import FadeInSection from './FadeInSection'
import BombLogo from './BombLogo'
import ScrollArrow from './ScrollArrow'
import SectionAnchor from './SectionAnchor'
import asset01 from '../assets/asset01.jpg'

function ResearchSection() {
  return (
    <section id="research" className="section section-dark parallax-section" style={{ backgroundImage: `url(${asset01})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
      <SectionAnchor darkBackground={true} />
      <FadeInSection>
        <div className="project-card">
          <div className="project-label">Research</div>
          <h1 className="project-title">
            Research printed with the Espresso Book Machine @ The American Book Center (ABC) in Amsterdam (NL), 2018.
          </h1>
          <BombLogo size={80} color="#ffffff" animated={false} />
        </div>
      </FadeInSection>
      <ScrollArrow />
    </section>
  )
}

export default ResearchSection

