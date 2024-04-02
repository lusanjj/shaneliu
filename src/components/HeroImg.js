import "./HeroImgStyle.css";
import React from "react";
import IntroImg from "../assets/into-img.jpg";
import { Link } from "react-router-dom";
// import pic2 from "../assets/xin.png";
const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hi, I'M XIN LIU.</p>
        <h1>Software Developer.</h1>
        <div>
          <Link to="/resume" className="btn">
            Resume
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Heroimg;
