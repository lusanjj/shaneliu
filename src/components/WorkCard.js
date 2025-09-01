// WorkCard.js
import "./WorkCardStyles.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  const { imgsrc, title, text, view, source } = props;
  const isLong = (text || "").length > 180;  // 控制是否显示“Read more”
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="project-card">
      <img src={imgsrc} alt={`${title} cover`} />
      <h2 className="project-title">{title}</h2>

      <div className="pro-content">
        <p className={`pro-desc ${expanded ? "expanded" : "clamp"}`}>
          {text}
        </p>

        {isLong && (
          <button
            type="button"
            className="readmore"
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}

        <div className="pro-btns">
          <NavLink to={view} className="btn" target="_blank" rel="noreferrer">
            VIEW
          </NavLink>
          <NavLink to={source} className="btn" target="_blank" rel="noreferrer">
            SOURCE
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
