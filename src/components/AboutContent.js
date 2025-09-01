import "./AboutContentStyle.css";
import React from "react";
import xin from "../assets/xin.jpg";

const AboutContent = () => {
  return (
    <section className="about">
      <img src={xin} className="img" alt="xin" />

      <h1 className="name">Shane Liu</h1>

      {/* 用一个容器承载所有段落，容器占用 grid-area:text */}
      <div className="about__text">
        <p className="describ">
          I am a Computer Science graduate from Toronto Metropolitan University
          (formerly Ryerson University) with a strong foundation in <b>Java</b> and
          backend development using <b>Spring Boot</b>. I have extended this into a{" "}
          <b>microservices architecture with Spring Cloud</b>, incorporating{" "}
          <b>JWT-based authentication</b>, <b>Redis caching</b>, and <b>MySQL</b> for
          reliable and secure backend services.
        </p>
        <p className="describ">
          On the front end, I work with <b>React.js</b> and <b>Next.js</b>, combined
          with <b>TypeScript</b>, to build responsive, SEO-friendly, and maintainable
          web applications. I focus on writing clean, reusable components and
          optimizing performance across different devices.
        </p>
        <p className="describ">
          I also have hands-on experience deploying applications in a{" "}
          <b>cloud-native environment</b> using <b>Docker</b>, <b>Kubernetes</b>, and{" "}
          <b>AWS</b>, supported by <b>CI/CD pipelines with GitHub Actions</b> and{" "}
          <b>Jenkins</b>. These experiences strengthened my ability to design and
          manage applications in <b>distributed environments</b>, where scalability,
          fault tolerance, and service communication are critical.
        </p>
        <p className="describ">
          With this background, I bring both a practical full-stack skill set and an
          interest in distributed systems, which motivates me to continue learning and
          contributing to high-impact, scalable software solutions.
        </p>
      </div>
    </section>
  );
};

export default AboutContent;
