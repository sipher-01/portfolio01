import React from "react";
import "./HeroImgStyle.css";
import HomeImg from "../assets/HomeImg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
    <div className="mask">
      <img className="home-img" src={HomeImg} alt="HomeImg" />
    </div>
      <div className="home-content">
      <p>HI, I'M SOURAV</p>  
      <h1>Web Developer</h1>
      <div>
        <Link to="/project" className="btn">PROJECTS</Link>
        <Link to="/contact" className="btn btn-light">CONTACT</Link>
      </div>
      </div>
    </div>
  );
};

export default HeroImg;
