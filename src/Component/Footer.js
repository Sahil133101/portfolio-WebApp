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
              <p style={{ padding: "5px 0", marginBottom: 0 }}> 39KA,Near Post Office</p>
              <p style={{ padding: "5px 0", marginBottom: 0 }}>Moh Mahadev Nakur </p>
              <p style={{ padding: "5px 0", marginBottom: 0 }}>Distt. Saharanpur</p>
            </div>
          </div>
          <div className="phone">
            <FaPhone size={20} style={{ color: "white", marginRight: "10px" }} />
            <p style={{ padding: "5px 0", marginBottom: 0 }}>+91-6396632572</p>
          </div>
          <div className="gmail">
            <FaMailBulk size={20} style={{ color: "white", marginRight: "10px" }} />
            <p style={{ padding: "5px 0", marginBottom: 0 }}>sahilsharmanakur@gmail.com</p>
          </div>
        </div>

        <div className="right">
          <p> <h3> About Me</h3></p>
          <p> I am a Student of Btech 3rd Year from </p>
           <p> Maharishi Markandeshwar deemed to be University </p>

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
