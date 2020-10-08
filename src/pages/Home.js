import React, { useState } from 'react'
import HeroSection from '../components/HeroSection/HeroSection';
import Navigation from '../components/Navigation/Navigation';
import Sidebar from '../components/Sidebar/Sidebar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navigation toggle={toggle} />
      <HeroSection />
    </>
  )
}

export default Home
