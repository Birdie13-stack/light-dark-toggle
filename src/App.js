import React, { useState } from "react";
import "./App.css";
import ThemeToggle from "./Components/ThemeToggle";

function App() {
  const [theme, setTheme] = useState(false);

  return (
    <div className={theme ? "dark-theme" : "light-theme"}>
      <h1>Hello World</h1>

      <label htmlFor="switch">
        <input type="checkbox" onChange={() => setTheme(!theme)} />
      </label>

      <ThemeToggle></ThemeToggle>
    </div>
  );
}

export default App;
