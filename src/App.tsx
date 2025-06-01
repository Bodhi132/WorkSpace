import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CityShowcase from './components/CityShowcase'
import FaqSection from './components/FaqSection'
import PerfectHotDeskText from './components/perfectHotDesk'
import HeroCard from './components/HeroCard'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <Navbar />
      <HeroSection />
      <PerfectHotDeskText />
      <CityShowcase />
      <FaqSection />
      <HeroCard />
      <Footer />
    </div>
  )
}

export default App
