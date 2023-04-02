import React, { useState } from "react";
import keepIdle from "/Sidebar/keepIdle.svg";
import bellIdle from "/Sidebar/bellIdle.svg";
import archiveIdle from "/Sidebar/archiveIdle.svg";
import binIdle from "/Sidebar/binIdle.svg";
import "./Sidebar.css";

export default function Sidebar({ handleSectionChange }) {
  const handleSectionClick = (event) => {
    const section = event.currentTarget.dataset.section;
    handleSectionChange(section);
  };
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a data-section="Notes" onClick={handleSectionClick}>
            <img src={keepIdle} className="keepIdle" alt="Keep Idle logo" />

            <p>Notes</p>
          </a>
        </li>

        <li>
          <a data-section="Reminders" onClick={handleSectionClick}>
            <img src={bellIdle} className="bellIdle" alt="Bell Idle icon" />
            <p>Reminders</p>
          </a>
        </li>

        <li>
          <a data-section="Archives" onClick={handleSectionClick}>
            <img
              src={archiveIdle}
              className="archiveIdle"
              alt="Archive Idle icon"
            />
            <p>Archive</p>
          </a>
        </li>

        <li>
          <a data-section="Bin" onClick={handleSectionClick}>
            <img src={binIdle} className="binIdle" alt="Bin Idle icon" />
            <p>Bin</p>
          </a>
        </li>
      </ul>
      <div className="sourceCode">
        <a href="https://github.com/navdeepkhubber/google-keep-clone">Github</a>
      </div>
    </div>
  );
}
