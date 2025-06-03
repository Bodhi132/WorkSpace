import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CityShowcase from './components/CityShowcase'
import FaqSection from './components/FaqSection'
import PerfectHotDeskText from './components/perfectHotDesk'
import HeroCard from './components/HeroCard'
import Footer from './components/Footer'
import CityShowcaseRes from './components/CityShowcaseRes'

function App() {

  return (
    <div>
      <Navbar />
      <HeroSection />
      <PerfectHotDeskText />
      <div className='hidden lg:block mt-[5rem]'>
        <CityShowcase />
      </div>
      <div className='lg:hidden max-sm:mt-4'>
        <CityShowcaseRes />
      </div>
      <FaqSection />
      <HeroCard />
      <Footer />
    </div>
  )
}

export default App
