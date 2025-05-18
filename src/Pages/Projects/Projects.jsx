import { useEffect } from "react";
import Projectard from "../../Components/ProjectCard/Projectard";
import projects from "./../../../public/Info.json";
import "./Projects.css";

const Projects = () => {
  useEffect(() => {
    console.log(projects.projects);
  }, []);

  return (
    <div className="outer">
      <div className="projects-heading">
        <div className="main-heading">
          <h1>My</h1>
          <h1>Recent</h1>
          <h1 className="third">Works!</h1>
        </div>
        <p className="small-texts">
          Here are a few projects I've worked on recently
        </p>
      </div>
      <div className="project-card-container">
        <div className="projects">
          {projects.projects.map((item, index) => (
            <Projectard
              key={index}
              title={item.name}
              description={item.description_30_40_words}
              githubLink={item.github_link}
              projectLink={item.project_link_if_exists}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
