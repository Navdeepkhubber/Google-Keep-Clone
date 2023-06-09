import React from "react";
import { useState } from "react";
import menuLogo from "/public/menu.svg";
import keepLogo from "/public/keep.svg";
import searchLogo from "/public/search.svg";
import "./Header.css";
import ToggleTheme from "./ToggleTheme";

export default function Header({ selectedSection, toggleSidebar }) {
  const [theme, setTheme] = useState(true);

  const handleTheme = () => {
    setTheme((prevTheme) => {
      return !prevTheme;
    });
  };

  return (
    <div className="header">
      <div className="iconsLeft">
        <img
          src={menuLogo}
          className="menuLogo"
          alt="Menu logo"
          onClick={toggleSidebar}
        />

        <div className="headerLeft">
          <img src={keepLogo} className="keepLogo" alt="Keep logo" />

          <h3>{selectedSection || "Keep Clone"}</h3>
        </div>
      </div>
      <div className="searchBar">
        <img src={searchLogo} className="searchLogo" alt="Search logo" />

        <textarea
          value="Dummy Search"
          placeholder="Search"
          className="search"
        />
      </div>
      <div className="headerRight">
        <ToggleTheme theme={theme} handleTheme={handleTheme} />
      </div>
    </div>
  );
}
