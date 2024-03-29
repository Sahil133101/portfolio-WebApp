import React from 'react'
import NavBar from '../Component/NavBar';
import Footer from '../Component/Footer';
import Hero2Image from '../Component/Hero2Image';
import Form from "../Component/Form"

const Contact = () => {
  return (
    <div className='React'> 
      <NavBar />
     <Hero2Image headig="CONTACT" text = "Lets us we have chat"/>
     <Form/>

     
      <Footer />
      
  
    </div>
  )
}

export default Contact;
