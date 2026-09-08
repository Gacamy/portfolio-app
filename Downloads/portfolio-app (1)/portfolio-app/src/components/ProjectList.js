import React from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectList.css";

// ProjectList receives the already-filtered array of projects from App.
// Its only job is to loop over that array and render one ProjectCard per item.
function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.length === 0 ? (
        <p className="no-results">No projects match your search.</p>
      ) : (
        <div className="project-list-inner">
          {projects.map((project) => (
            // "key" helps React tell each card apart - it must be unique
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectList;
