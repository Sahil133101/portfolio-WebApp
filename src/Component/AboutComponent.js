import { Link } from "react-router-dom";
import "./AboutComponentStyles.css";
import React from 'react'
import Img1 from "../assests/gesture control.jpeg";
import Img2 from "../assests/lfr.jpeg";

const AboutComponent = () => {
  return (
    <div className="About">
        <div className="Left">
            <h1>
                Who Am I?
            </h1>
            <p>
                I am a react frontend Developer😅. I create a responsive website for my clients.
            </p>
            <Link to="/Contact">
                <button className="btn"> Contact </button>
            </Link>

            <div className="Right">
                <div className="Img-container">
                    <div className="Img-stack top"> 
                    <img src={Img1} className="img" alt="true" />
                     
                     </div>
                     <div className="Img-stack bottom">
                        <img src ={Img2} classNamr = "img" alt = "true"/>
                        </div>


                     </div>

                </div>

            </div>
            </div> 
  )
}

export default AboutComponent