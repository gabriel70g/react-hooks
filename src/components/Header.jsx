import React, { useState, useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  console.log("iniciando", theme);

  const handleClick = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
    darkMode ? setTheme("bg-dark") : setTheme("bg-light");
  };

  return (
    <div className="Header">
      <h1 className={theme}> React-Hooks</h1>
      <button type="button" onClick={handleClick}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default Header;
