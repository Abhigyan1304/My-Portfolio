import React from "react";
import { FaGithub } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";
import "./Projectcard.css";

const Projectard = ({ title, description, githubLink, projectLink }) => {
  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="card">
      <div className="logo-container">
        <img className="logo" src="/elon4.png" alt={title} />
      </div>
      <h1>{title}</h1>
      <div className="project-desc">
        <p>{description}</p>
      </div>
      <div className="links">
        <button className="project-btn" onClick={() => handleClick(githubLink)}>
          <FaGithub />
          Github
        </button>
        {projectLink && (
          <button
            className="project-btn"
            onClick={() => handleClick(projectLink)}
          >
            <GoProjectSymlink />
            Demo
          </button>
        )}
      </div>
    </div>
  );
};

export default Projectard;
