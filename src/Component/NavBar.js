import { Link } from "react-router-dom";
import "./NavBarStyles.css";
import React, { useState } from 'react';

import { FaBars, FaTimes } from "react-icons/fa";

import Main from "./Main";

const NavBar = () => {

  const[click, setClick] =  useState(0);
  const handleClick = () =>  setClick(!click);
  const [color ,setcolor] = useState(0);
  const changeColor =() => {  
    if(window.scrollY >=100){
      setcolor(true);
    } 
  else {
    setcolor(false);
  }
 }

 window.addEventListener ("scroll", changeColor);
  return (
    <div className= {color ? "header header-bg" : "header"}>
      <Link to="/">
        <div className="H1">
          <h1>
            Portfolio
          </h1>
        </div>
      </Link>
      <ul className={click ? "Navbar active":"Navbar " }>
        <li>
          <Link to="/Home"> Home </Link>
        </li>
        <li>
          <Link to="/Project"> Project </Link>
        </li>
        <li>
          <Link to="/About"> About </Link>
        </li>
        <li>
          <Link to="/Contact"> Contact </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
  {click ? (
    <FaTimes size={20} style={{ color: "#ffffff" }} />
  ) : (
    <FaBars size={20} style={{ color: "#ffffff" }} />
  )}
</div>

    </div>
  );
}

export default NavBar;
