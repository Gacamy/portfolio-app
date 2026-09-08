# Personal Project Showcase App (React SPA)

A single-page React app for a creative agency to display past projects,
add new ones through a form, and filter them
the provided mock-up: an "Add Project" form at the top, a search box, and
a vertical list of projects below.

 Features
- Landing page listing all projects 
- Form to add a new project (title + description)
- Live search bar that filters projects by title as you type

## Component structure
App (owns all state: projects, searchTerm)
 Header            (static title/banner)
 ProjectForm        (own local state for form fields; calls onAddProject)
  onSearchChange
renders a grid of ProjectCard
ProjectCard    (displays one project)

State lives in App.js
data back up by calling functions that were passed to them 
(`onAddProject`, `onSearchChange`) 
start;

1. Install dependencies:
   npm install
2. Run the app locally:
   npm start
   Open http://localhost:3000 in your browser.

3. Run the tests:

   
Project data

The app starts with 3 sample projects (`src/data/initialProjects.js`).
refreshing the page resets to the sample data. 
on React state/props/events without needing a backend or database.

 Pushing to GitHub
git init
git add .
git commit -m 
git branch -M main
git remote add origin
git push -u origin main
