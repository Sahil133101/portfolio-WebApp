

import "./Main.css";
import React from 'react';

import introimg from "../assests/web-developer-portfolio.png";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="Hero">
      <div className="mask">
        <img className=" intro-img" 
        src={introimg} alt="IntroImg"/>
          
          
        
      </div>
      <div className="Content">

        <p> MANPREET BRAR</p>
        <h1> A Proffesional *RAAND* </h1>
<div> 


        <Link to="/project" className="btn"> Projects</Link>
    <Link to="/contact" className="btn btn-light"> Contact</Link>
      </div>
    </div>
    
   
    </div> 
  )
}

export default Main;
