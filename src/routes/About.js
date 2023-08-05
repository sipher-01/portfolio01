import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HeroImg2 from '../components/HeroImg2'
import AboutData from "../components/AboutData"
const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT" text="Im a Front-End Developer."/>
      <AboutData/>
      <Footer/>
    </div>
  )
}

export default About