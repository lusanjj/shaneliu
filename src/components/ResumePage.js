import "./ResumePageStyle.css";
import React from "react";
import xin from "../assets/resume.png"; // 你的简历图片

const ResumePage = () => {
  return (
    <div className="resume-page">
      <div className="resume-container">
        <img src={xin} className="resume-img" alt="resume" />
      </div>

      {/* 可选：下载按钮 */}
      <div className="resume-actions">
        <a href={xin} download="ShaneLiu_Resume.png" className="download-btn">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default ResumePage;
