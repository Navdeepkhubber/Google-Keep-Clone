import React from "react";
import { useState } from "react";
import menuLogo from "/public/menu.svg";
import keepLogo from "/public/keep.svg";
import searchLogo from "/public/search.svg";
import "./Header.css";
import ToggleView from "./ToggleView";
import ToggleTheme from "./ToggleTheme";

export default function Header() {
  const [view, setView] = useState(false);
  const [theme, setTheme] = useState(true);

  const handleView = () => {
    setView((prevView) => {
      return !prevView;
    });
  };

  const handleTheme = () => {
    setTheme((prevTheme) => {
      return !prevTheme;
    });
  };

  return (
    <div className="header">
      <div className="iconsLeft">
        <img src={menuLogo} className="menuLogo" alt="Menu logo" />

        <div className="headerLeft">
          <img src={keepLogo} className="keepLogo" alt="Keep logo" />

          <h3>Keep Clone</h3>
        </div>
      </div>
      <div className="searchBar">
        <img src={searchLogo} className="searchLogo" alt="Search logo" />

        <textarea value="Search" className="search" />
      </div>
      <div className="headerRight">
        <ToggleView view={view} handleView={handleView} />
        <ToggleTheme theme={theme} handleTheme={handleTheme} />
      </div>
    </div>
  );
}
