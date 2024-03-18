import "./Hero2Image.css"

import React from 'react'

const Hero2Image = (props) => {
  return (
    <div className="hero-img">
        <div className="heading">
           <h1> {props.heading}
             </h1> 
             <p>{props.text}</p>
             </div>
    </div>
  )
}

export default Hero2Image