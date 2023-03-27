import React from "react";
import lightMode from "/light.svg";
import darkMode from "/dark.svg";
import "./Header.css";

function ToggleTheme({ theme, handleTheme }) {
  return (
    <div>
      {theme ? (
        <img
          className="lightMode"
          src={lightMode}
          alt="Light Mode"
          onClick={() => handleTheme()}
        />
      ) : (
        <img
          className="darkMode"
          src={darkMode}
          alt="Dark Mode"
          onClick={() => handleTheme()}
        />
      )}
    </div>
  );
}

export default ToggleTheme;
