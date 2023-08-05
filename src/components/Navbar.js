import React, { useState } from "react";
import "./NavbarStyle.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [state, setState] = useState(false);
  const check = () => setState(!state);
  const [bg,setBg]=useState(false);
  const change = ()=> {
  if(window.scrollY>100)  setBg(true);
  else{
    setBg(false);
  }
  }
  window.addEventListener("scroll",change);
  return (
    <div className={(bg?'header header-bg':' header')}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={state ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Project">Projects</Link>
        </li>
        <li>
          <Link to="/Skill">Skills</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      <div className="bars" onClick={check}>
        {state ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
