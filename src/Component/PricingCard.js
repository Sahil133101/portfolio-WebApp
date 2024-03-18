import React from "react";
import { Link } from "react-router-dom"; // Make sure to import Link from react-router-dom

import "./PricingCardStyle.css";

const PricingCard = () => {
  return (
    <div className="PricingCard">
      <div className="CardContainer">
        <div className="Card">
          <h3>- Basic -</h3>
          <span className="Bar"></span>
          <p className="btc">
            <h1>$ 100</h1>
          </p>
          <p>
            <strong>-3 Days-</strong>
          </p>
          <p>
            <strong>-3 Pages-</strong>
          </p>
          <p>
            <strong>-Featured-</strong>
          </p>
          <p>
            <strong>-Responsive Design-</strong>
          </p>
          <Link to="/Contact" className="btn">
            Purchase Now
          </Link>
        </div>
        <div className="Card">
          <h3>- Premium -</h3>
          <span className="Bar"></span>
          <p className="btc">
            <h1>$ 200</h1>
          </p>
          <p>
            <strong>-5Days-</strong>
          </p>
          <p>
            <strong>-10 Pages-</strong>
          </p>
          <p>
            <strong>-Featured-</strong>
          </p>
          <p>
            <strong>-Responsive Design-</strong>
          </p>
          <Link to="/Contact" className="btn">
            Purchase Now
          </Link>
        </div>
        <div className="Card">
          <h3>-Business-</h3>
          <span className="Bar"></span>
          <p className="btc">
            <h1>$ 300</h1>
          </p>
          <p>
            <strong>-8Days-</strong>
          </p>
          <p>
            <strong>-15 Pages-</strong>
          </p>
          <p>
            <strong>-Featured-</strong>
          </p>
          <p>
            <strong>-Responsive Design-</strong>
          </p>
          <Link to="/Contact" className="btn">
            Purchase Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
