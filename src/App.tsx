import './App.css'
import LoadingScreen from './components/LoadingScreen'
import Navigation from './components/Navigation'
import IntroSection from './components/IntroSection'
import ResearchSection from './components/ResearchSection'
import TranscriptsSection from './components/TranscriptsSection'
import AMROSection from './components/AMROSection'
import GradshowSection from './components/GradshowSection'
import UndesigningSection from './components/UndesigningSection'
import LibrarySection from './components/LibrarySection'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <>
      <LoadingScreen />
      <Navigation />
      <div className="app">
        <IntroSection />
        <ResearchSection />
        <TranscriptsSection />
        <AMROSection />
        <GradshowSection />
        <UndesigningSection />
        <LibrarySection />
        <Footer />
        <BackToTop />
      </div>
    </>
  )
}

export default App
