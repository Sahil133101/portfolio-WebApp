import "./WorkCardStyle.css";
import React from 'react'
import pro1 from "../assests/bluetooth.jpg";
import { NavLink } from "react-router-dom";

const workcard = () => {
  return (
  <div className="Work-Container"> 
  <h1 className="Project-heading">Project 
    </h1>
    <div className="project-container">
      <div className="Project-Card">
        <img src={pro1} alt= "image "/>
        
         <div className="Heading2">  <h2 className="Project Title">Project Title </h2>
        </div>
        
        <div className="ProDetails"><p>This is a Bluetooth control robot using Arduino</p></div>
        <div className="buttons">
        <div className="pro-btns">
          <NavLink to="https://github.com/Sahil133101" className="btn">View</NavLink> </div>
          <div className="pro-btns">
          <NavLink to="https://github.com/Sahil133101" className="btn">Source</NavLink> </div>
          </div>
          </div>
        <div className="Project-Card">
        <img src={pro1} alt= "image "/>
        
        <div className="Heading2">
        <h2 className="Project Title">Project Title </h2>
        </div>
        <div className="ProDetails"><p>This is a Bluetooth control robot using Arduino</p></div>
        <div className="buttons"> 
        <div className="pro-btns">
          <NavLink to="https://github.com/Sahil133101" className="btn">View</NavLink> </div>
          <div className="pro-btns">
          <NavLink to="https://github.com/Sahil133101" className="btn">Source</NavLink> </div>
          </div>
        </div>
        <div className="Project-Card">
        <img src={pro1} alt= "image "/>
        <h2 className="Project-Title">Project Title </h2>
        
        <div className="ProDetails"><p>This is a Bluetooth control robot using Arduino</p></div>
        <div className="buttons">
        <div className="pro-btns">
          <NavLink to="https://github.com/Sahil133101" className="btn">View</NavLink> </div>
          <div className="pro-btns">
          <NavLink to="https://github.com/Sahil133101" className="btn">Source</NavLink> </div>
          </div>
        </div>
        </div>
        
        </div>
        
  )
}

export default workcard
