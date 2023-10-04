import React, { useState } from "react";
function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);

    console.log(darkMode);
  };
  return (
    <div className="theme-toggle">
      <label>
        <input type="checkbox" checked={darkMode} onChange={toggleTheme} /> Dark
        Mode
      </label>
    </div>
  );
}

export default ThemeToggle;
