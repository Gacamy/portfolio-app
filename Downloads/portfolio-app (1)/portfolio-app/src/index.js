import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// This is the starting point of every React app.
// It finds the <div id="root"> in public/index.html
// and tells React to render our <App /> component inside it.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
