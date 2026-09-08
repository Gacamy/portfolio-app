import React, { useState } from "react";
import "./ProjectForm.css";

// ProjectForm keeps its OWN state for the input fields, because that data
// is only needed here while the user is typing. Once the form is submitted,
// we hand the finished project up to App using the onAddProject prop.
function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    // Stop the browser from doing a full page reload on submit
    event.preventDefault();

    // Simple validation - don't allow empty fields
    if (!title.trim() || !description.trim()) {
      alert("Please fill in both a title and description.");
      return;
    }

    // Build the new project object
    const newProject = {
      id: Date.now(), // a quick way to get a unique number
      title: title.trim(),
      description: description.trim()
    };

    // Send it up to App, which owns the real list of projects
    onAddProject(newProject);

    // Clear the form so it's ready for the next entry
    setTitle("");
    setDescription("");
  }

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h2>Add Project</h2>

      <label htmlFor="project-title">Title</label>
      <input
        id="project-title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="project-description">Description</label>
      <textarea
        id="project-description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="4"
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default ProjectForm;
