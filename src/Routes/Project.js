import React from 'react';
import NavBar from "../Component/NavBar";
import './Project.css';
import Footer from "../Component/Footer";
import Introimg from "../assests/wallpaper.jpg"
import PricingCard from '../Component/PricingCard';

import Hero2Image from '../Component/Hero2Image';

const Project = () => {
  return (
    
        <>
        <div className='project'>
        <NavBar/>
        
{/*         
        <img className=" intro-img" 
        src={Introimg} alt="IntroImg"/> */}
        <Hero2Image heading="PROJECTS." text= "Some of my most recent works"/>
        <PricingCard></PricingCard>
        <Footer/>
        </div>
       
        </>
    
  );
}

export default Project;
