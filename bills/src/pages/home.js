import React, {useState} from 'react'
import Footer from '../components/Footer/footer'
import HeroSection from '../components/HeroSection/hero'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import InfoSection from '../components/InfoSection/infoSection'
import Navbar from '../components/Navbar/navbar'
import Services from '../components/services/services'
import Sidebar from '../components/Sidebar/sidebar'

const Home = () => {
  const [isOpen, setIsOpen]= useState(false)

  const toggle = () => {
    setIsOpen(!isOpen )
  }
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle} />
    <HeroSection />
    <InfoSection {...homeObjOne}/>
    <InfoSection {...homeObjTwo}/>
    <Services />
    <InfoSection {...homeObjThree}/>
    <Footer />
    </>
  )
}

export default Home