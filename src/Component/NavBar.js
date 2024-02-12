import { Link } from "react-router-dom"
import "./NavBarStyles.css"
import React from 'react'


const NavBar= () => {
  return (
    <div className=" header">
      <Link to = "/">
        <div className="H1">
        <h1>
          Portfolio
        </h1>
        </div>
      </Link>
      <ul className="Navbar">
        <li>
          <Link to = "/Home"> Home </Link>
        </li>
        <li>
          <Link to = "/Project"> Project </Link>
        </li>
        <li>
          <Link to = "/About"> About </Link>
        </li>
        <li>
          <Link to = "/Contact"> Contact </Link>
        </li>

      </ul>

        

    </div>
  )
}

export default NavBar;