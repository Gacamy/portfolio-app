import React from "react";
import "./ProjectCard.css";

// ProjectCard displays one project as a row: a placeholder icon box on the
// left, then the title and description on the right - matching the mock-up.
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-icon">✕</div>
      <div className="project-text">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
