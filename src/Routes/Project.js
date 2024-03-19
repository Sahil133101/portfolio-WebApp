import React from 'react';
import NavBar from "../Component/NavBar";
import './Project.css';
import Footer from "../Component/Footer";
import Introimg from "../assests/wallpaper.jpg";
import PricingCard from '../Component/PricingCard';
import Hero2Image from '../Component/Hero2Image';
import WorkCard from '../Component/WorkCard';


const Project = () => {
  return (
    <>
      <div className='project'>
        <NavBar />
        {/* Commented out the intro image as it's not present in the code */}
        {/* <img className="intro-img" src={Introimg} alt="IntroImg" /> */}
        <Hero2Image heading="PROJECTS." text="Some of my most recent works" />
        <PricingCard /> {/* Corrected the component name */}
        <WorkCard></WorkCard>
       
        <Footer />
      </div>
    </>
  );
}

export default Project;
