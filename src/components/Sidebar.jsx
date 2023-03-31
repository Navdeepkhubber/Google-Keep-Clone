import React, { useState } from "react";
import keepIdle from "/Sidebar/keepIdle.svg";
import bellIdle from "/Sidebar/bellIdle.svg";
import archiveIdle from "/Sidebar/archiveIdle.svg";
import binIdle from "/Sidebar/binIdle.svg";
import Trash from "./Trash";
import "./Sidebar.css";

export default function Sidebar({
  handleTrashClick,
  showTrash,
  trash,
  setTrash,
}) {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="Notes">
            <img src={keepIdle} className="keepIdle" alt="Keep Idle logo" />
            <p>Notes</p>
          </a>
        </li>

        <li>
          <a href="Reminders">
            <img src={bellIdle} className="bellIdle" alt="Bell Idle icon" />
            <p>Reminders</p>
          </a>
        </li>

        <li>
          <a href="Archives">
            <img
              src={archiveIdle}
              className="archiveIdle"
              alt="Archive Idle icon"
            />
            <p>Archive</p>
          </a>
        </li>

        <li>
          <a href="#" onClick={handleTrashClick}>
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
