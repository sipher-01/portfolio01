import { Link } from "react-router-dom";
import "./AboutDataStyle.css";
import React from "react";
import image from "../assets/HomeImg.jpg"

const AboutData = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I</h1>
        <p>...................................................................................</p>
      <Link to="/contact">
        <button className="btn">Contact</button>
      </Link>
      </div>
      <div className="right">
        <div className="img-container">
        <div className="img-stack top">
         <img src={image} alt="image" className="img"/>
        </div>
        <div className="img-stack bottom">
         <img src={image} alt="image" className="img"/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutData;
