import React, { useState, useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
    darkMode ? setTheme("bg-dark") : setTheme("bg-light");

    console.log(theme);
  };

  return (
    <div className="Header">
      <h1 style={{ theme }}> React-Hooks</h1>
      <button type="button" onClick={handleClick}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </button>
      <button type="button" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Dark Mode 2" : "Light Mode 2"}
      </button>
    </div>
  );
};

export default Header;
