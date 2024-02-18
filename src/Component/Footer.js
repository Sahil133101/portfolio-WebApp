import "./Footer.css";
import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "10px" }} />
            <div>
              <p style={{ padding: "5px 0", marginBottom: 0 }}>Near Pioneer School</p>
              <p style={{ padding: "5px 0", marginBottom: 0 }}> Singhpura</p>
              <p style={{ padding: "5px 0", marginBottom: 0 }}>Distt. Jind</p>
            </div>
          </div>
          <div className="phone">
            <FaPhone size={20} style={{ color: "white", marginRight: "10px" }} />
            <p style={{ padding: "5px 0", marginBottom: 0 }}>+91-73u29u929</p>
          </div>
          <div className="gmail">
            <FaMailBulk size={20} style={{ color: "white", marginRight: "10px" }} />
            <p style={{ padding: "5px 0", marginBottom: 0 }}>brar@gmail.com</p>
          </div>
        </div>

        <div className="right">
          <p> <h3> About the company</h3></p>
          <p> This is me Manpreet Brar.  CEO & founder of Brar Kotha.  I enjoy with every Customer</p>
          <div className="Social">
          <a href="https://www.facebook.com/your-profile-link">
              <FaFacebook size={30} style={{ color: "white", marginRight: "1rem" }} />
            </a>
            <a href="https://www.twitter.com/your-profile-link">
              <FaTwitter size={30} style={{ color: "white", marginRight: "1rem" }} />
            </a>
            <a href="https://www.linkedin.com/your-profile-link">
              <FaLinkedin size={30} style={{ color: "white", marginRight: "1rem" }} />
            </a>
               </div>
               
        </div>
      </div>
    </div>
  );
}

export default Footer;
