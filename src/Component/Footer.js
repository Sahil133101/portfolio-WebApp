import "./Footer.css";
import React from 'react';
import { FaHome, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "1rem" }} />
            <div>
              <p>39KA, Near Post Office</p>
              <p>Moh Mahadev Nakur</p>
              <p>Distt. Saharanpur</p>
            </div>
            </div>
            <div className="phone">
            <FaPhone size={20} style={{ color: "white", marginRight: "1rem" }} />
            <div>
              <p>6396632572</p>
            </div>
          </div>
          
        </div>

        <div className="right">
          
        </div>
      </div>
    </div>
  );
}

export default Footer;
