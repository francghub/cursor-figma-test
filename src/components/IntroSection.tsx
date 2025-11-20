import './IntroSection.css'
import FadeInSection from './FadeInSection'
import BombLogo from './BombLogo'

function IntroSection() {
  return (
    <section id="intro" className="section section-white intro-section">
      <div className="section-content">
        <FadeInSection>
          <h1 className="intro-title">The powerful social implications of software.</h1>
        </FadeInSection>
        
        <FadeInSection delay={0.2}>
          <div className="intro-text">
            <p className="intro-paragraph-main">
              My research began in the friction of the Catalan referendum on October 1st (1-O). While the region faced political upheaval, I saw the controversial collision of news media, censorship, and digital infrastructure as the urgent, perfect backdrop for my study development. The chaos provided a live testing ground for understanding how history is edited in real-time.
            </p>
            
            <p className="intro-paragraph-main">
              The visual identity I developed reflects this tension. The logo reinterprets "1-O": the "O" is drawn as a bomb, with an asterisk nestled inside as its fuse. It transforms a typographic mark of citation into an explosive footnote—a visual protest signaling that information is always being interrupted, contested, and rewritten.
            </p>
            
            <p className="intro-paragraph-main">
              Through this project, I explore how algorithms and archives frame our reality. By building my own self-hosted systems and RSS tracking engines, I am defining how individuals can create ethical, decentralized infrastructures. This platform is my living archive—collecting experiments from AMRO and the XPUB Graduate Show—designed to reclaim digital autonomy.
            </p>
          </div>
        </FadeInSection>
        
        <BombLogo size={80} animated={true} />
      </div>
    </section>
  )
}

export default IntroSection
