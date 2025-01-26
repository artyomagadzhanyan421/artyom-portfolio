import React from "react";
import useProjects from "../hooks/useProjects"; 

// CSS
import "../styles/Projects.css";

function Projects() {
  const projects = useProjects();

  return (
    <div className="Block" id="projects">
      <center>
        <p className="blockHeading">My works</p>
      </center>
      <center>
        <p className="blockDesc" style={{ maxWidth: "250px" }}>Check out some of my favorite & most recent projects.</p>
      </center>
      <div className="content">
        <div className="projects">
          {projects.map((project) => (
            <a key={project.id} href={project.href} target="_blank" className="project">
              <img src={project.imgSrc} alt="project" />
              <div className="projectData">
                <div
                  className="projectIcon"
                  style={{ background: project.icon.background }}
                >
                  <box-icon
                    name={project.icon.name}
                    type="solid"
                    color={project.icon.color}
                  ></box-icon>
                </div>
                <div className="projectTitle">
                  <p>{project.title}</p>
                  <p>{project.description}</p>
                </div>
                <div className="projectIcon iconRight">
                  <box-icon name="right-arrow-alt"></box-icon>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;