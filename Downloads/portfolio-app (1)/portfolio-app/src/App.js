import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import initialProjects from "./data/initialProjects";
import "./App.css";

// App is the "parent" component. It holds the two pieces of state that
// the whole page depends on:
//   1. projects   - the full list of portfolio projects
//   2. searchTerm - whatever text is currently typed in the search box
//
// Keeping state here (instead of inside SearchBar or ProjectForm) is called
// "lifting state up". It lets multiple components share and update the
// same data through props.
function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState("");

  // Called by ProjectForm whenever a new project is submitted.
  // We add the new project to the front of the array using the spread (...)
  // operator, which copies the old array and adds the new item.
  function handleAddProject(newProject) {
    setProjects([newProject, ...projects]);
  }

  // Called by SearchBar every time the user types.
  function handleSearchChange(newTerm) {
    setSearchTerm(newTerm);
  }

  // Filter the projects list based on the search term.
  // This runs on every render, so it's always up to date - no extra state needed.
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header />

      <main>
        <ProjectForm onAddProject={handleAddProject} />

        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />

        <ProjectList projects={filteredProjects} />
      </main>
    </div>
  );
}

export default App;
