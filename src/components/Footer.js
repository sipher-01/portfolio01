import React from "react";
import "./FooterStyle.css";
import {
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left-foot">
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              +91-94191-18449
            </h4>
          </div>
          <div className="email">
            <h4 className="mail">
              <FaMailBulk size={18} style={{ color: "#fff", marginRight:"1rem" }} />{" "}
              er.souravkatoch@gmail.com
            </h4>
          </div>
        </div>
        <div className="right-foot">
          <h4>About the Person</h4>
          <p>
            Similarly, you can set a different flex-grow value for each flex
            item to make them grow relative to each other. Play around with the
            values in this example and see how they affect the layout:
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaGithub
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
