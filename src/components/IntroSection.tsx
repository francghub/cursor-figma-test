import './IntroSection.css'
import FadeInSection from './FadeInSection'
import BombLogo from './BombLogo'
import ScrollToTopArrow from './ScrollToTopArrow'

function IntroSection() {
  return (
    <section id="intro" className="section section-white intro-section">
      <ScrollToTopArrow />
      <div className="section-content">
        <FadeInSection>
          <h1 className="intro-title">The powerful social implications of software.</h1>
        </FadeInSection>
        
        <FadeInSection delay={0.2}>
          <div className="intro-text">
            <p className="intro-paragraph-first">
              This project began as an investigation into the role of news media, censorship, 
              and digital infrastructures during the events surrounding the 1st of October (1-O) 
              referendum in Catalonia. The logo—a circular "O" with an asterisk inside, drawn as 
              a fuse-powered symbol—represents both:
            </p>
            
            <ul className="intro-list">
              <li><strong>1-O</strong> (the date itself, encoded as a glyph), and</li>
              <li>the <strong>asterisk</strong> as a typographic mark for special attention, annotation, citation, and interruption.</li>
            </ul>
            
            <p className="intro-paragraph-main">
              Together, the symbol functions as a visual protest: an explosive footnote, a reminder 
              that information is always edited, contested, and rewritten.
            </p>
            
            <p className="intro-paragraph-main">
              The project explores how software, servers, archives, and algorithmic tools shape not 
              only what we read, but how events are framed, repeated, and altered over time. By 
              experimenting with self-hosted systems, RSS-based tracking engines, and open-source 
              publishing workflows, the research investigates how individuals and small collectives 
              can build ethical, decentralized infrastructures for documenting rapidly changing 
              political realities.
            </p>
            
            <p className="intro-paragraph-main">
              The platform brings together research experiments, transcripts, collaborative networks, 
              artistic interventions, and documentation of events such as AMRO (Arts Meet Radical 
              Openness) and the XPUB Graduate Show, forming a living archive of tools, knowledge, 
              and social practices around media literacy and digital autonomy.
            </p>
          </div>
        </FadeInSection>
        
        <BombLogo size={80} animated={true} />
      </div>
    </section>
  )
}

export default IntroSection
