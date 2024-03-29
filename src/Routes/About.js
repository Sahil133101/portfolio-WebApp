import React from 'react'
import NavBar from '../Component/NavBar';
import Footer from '../Component/Footer';
import './About.css';
import Hero2Image from '../Component/Hero2Image';
import AboutComponent from '../Component/AboutComponent';

const About = () => {
  return (
    <div className='React'> 
      <NavBar />
      <Hero2Image heading= "ABOUT." text="Hey👋. Im a friendly Frontend Developer😅"/>
      <AboutComponent/>
      <Footer />
      
  
    </div>
  )
}

export default About;