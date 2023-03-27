import React from "react";
import listView from "/list.svg";
import gridView from "/grid.svg";
import "./Header.css";

function ToggleTheme({ view, handleView }) {
  return (
    <div className="toggle-wrapper">
      {view ? (
        <img
          className="listView"
          src={listView}
          alt="List View"
          onClick={() => handleView()}
        />
      ) : (
        <img
          className="gridView"
          src={gridView}
          alt="Grid View"
          onClick={() => handleView()}
        />
      )}
    </div>
  );
}

export default ToggleTheme;
