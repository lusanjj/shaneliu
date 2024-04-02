import "./FooterStyles.css";
import ins from "../assets/ins.png"
import wechat from "../assets/wechat.jpg"
import React from "react";
import { FaGithub,  FaInstagram,  FaLinkedin,  FaMailBulk,  FaSchool, FaWeixin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
            
                <p>
                  <FaSchool size={25} style={{ color: "#fff", marginRight: "1rem" }} />
                  <p>Toronto Metropolitan University </p>
                  
                  <p style={{textAlign:"center"}}>
                    (Ryerson University)
                  </p>
                </p>
            </div>

            <div className="email">
               <p><FaMailBulk size={25} style={{ color: "#fff", marginRight: "1rem" }} /> <p>x13liu@torontomu.ca</p></p>        
            </div>
            
            {/* <div className="github">
            <h4><FaGithub size={20} style={{ color: "#fff", marginRight: "2rem" }} /> https://github.com/lusanjj</h4>
            </div>

            <div className="email">
            <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} /> x13liu@torontomu.ca</h4>
            </div>

            <div className="linkedin">
            <h4><FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }} />  https://www.linkedin.com/in/xin-liu-a015251a2/</h4>
            </div> */}
        </div>

        <div className="right">
            <div className="social">
            <a href="https://www.linkedin.com/in/xinliu02/" target="_blank" rel="noreferrer">
            <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/>
            </a>
            <a href="https://github.com/lusanjj"target="_blank"rel="noreferrer">
            <FaGithub size={30} style={{color:"#fff",marginRight:"1rem"}}/>
            </a>
            <a href={wechat}target="_blank"rel="noreferrer">
            <FaWeixin size={30} style={{color:"#fff",marginRight:"1rem"}}/>
            </a>
            <a href={ins}target="_blank"rel="noreferrer">
            <FaInstagram size={30} style={{color:"#fff",marginRight:"1rem"}}/>
            </a>


            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
