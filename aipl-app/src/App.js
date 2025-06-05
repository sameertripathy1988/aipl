
import './App.css';
import Navbar from './components/Navbar';
import HeroSection
 from './components/HeroSection';
 import './index.css';
import AboutSection from './components/AboutSection';
import FooterCTA from './components/FooterCTA';
import GameSection from './components/GameSection';
import CompanyIntro from './components/CompanyIntro';
function App() {
    //return <ComingSoonPage />;
    return (
    <>
      <Navbar />
      <HeroSection />
      <CompanyIntro />
      <AboutSection />
      <GameSection />
      <FooterCTA />
      {/* Add other sections here */}
    </>
  );
}

export default App;
