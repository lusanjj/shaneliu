import "./AboutContentStyle.css";
import React from "react";
import xin from "../assets/xin.jpg";

const AboutContent = () => {
  return (
    <div className="about">
        <img src={xin} width="20%" className="img" alt="xin" ></img>
        <h1 className="name">Shane Liu</h1>
        <p className="describ">
        A final year of the Computer Science program at Toronto Metropolitan University (TMU), previously known as Ryerson University. With a strong foundation in Java, complemented by knowledge of Spring and Spring Boot for backend development, I have also expanded my skill set to include front-end technologies like React.js and Vue 3. My education has equipped me with a well-rounded understanding of both client-side and server-side development, preparing me to contribute effectively to any technology team. 
        I am keen to leverage my skills in a dynamic environment where I can continue to grow and tackle new challenges in the tech industry.
        </p>
      </div>
  );
};

export default AboutContent;
