import React from 'react';
import NavBar from "../Component/NavBar";
import './Project.css';
import Footer from "../Component/Footer";

const Project = () => {
  return (
    <div>
      <div className='navbar'>
        <NavBar/>
      </div>
      <div className='project'>
        <Footer/>
      </div>
    </div>
  );
}

export default Project;
