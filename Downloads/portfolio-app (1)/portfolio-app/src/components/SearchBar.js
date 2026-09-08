import React from "react";
import "./SearchBar.css";

// SearchBar receives two props from App:
// - searchTerm: the current text typed into the search box (the state itself)
// - onSearchChange: a function to call whenever the text changes
//
// SearchBar does NOT keep its own state. It just shows what App tells it
// to show, and reports changes back up to App. This pattern is called
// a "controlled input".
function SearchBar({ searchTerm, onSearchChange }) {
  function handleChange(event) {
    // event.target.value is whatever the user just typed
    onSearchChange(event.target.value);
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Projects"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
