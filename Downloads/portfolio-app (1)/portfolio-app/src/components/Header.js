import React from "react";
import "./Header.css";

// Header is a "dumb" component - it just displays content.
// It doesn't need any state or props because nothing here changes.
function Header() {
  return (
    <header className="header">
      <h1>Personal Project Showcase App</h1>
    </header>
  );
}

export default Header;
