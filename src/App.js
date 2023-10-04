import React from "react";
import "./App.css";
import ThemeToggle from "./Components/ThemeToggle";

function App() {
  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <h1>Hello World</h1>

      <ThemeToggle></ThemeToggle>
    </div>
  );
}

export default App;
