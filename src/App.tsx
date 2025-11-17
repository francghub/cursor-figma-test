import './App.css'
import LoadingScreen from './components/LoadingScreen'
import Navigation from './components/Navigation'
import Header from './components/Header'
import ResearchSection from './components/ResearchSection'
import PadliographySection from './components/PadliographySection'
import TranscriptsSection from './components/TranscriptsSection'
import AMROSection from './components/AMROSection'
import ArtsSection from './components/ArtsSection'
import UndesigningSection from './components/UndesigningSection'
import GradshowSection from './components/GradshowSection'
import LibrarySection from './components/LibrarySection'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <>
      <LoadingScreen />
      <Navigation />
      <div className="app">
        <Header />
        <ResearchSection />
        <PadliographySection />
        <TranscriptsSection />
        <AMROSection />
        <ArtsSection />
        <UndesigningSection />
        <GradshowSection />
        <LibrarySection />
        <Footer />
        <BackToTop />
      </div>
    </>
  )
}

export default App

