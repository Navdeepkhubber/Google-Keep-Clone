import React, { useState } from "react";
import keepIdle from "/Sidebar/keepIdle.svg";
import bellIdle from "/Sidebar/bellIdle.svg";
import archiveIdle from "/Sidebar/archiveIdle.svg";
import binIdle from "/Sidebar/binIdle.svg";
import "./Sidebar.css";

export default function Sidebar({ menu, handleMenu }) {
  return (
    <div className={`sidebar ${menu ? "open" : ""}`}>
      <ul>
        <li>
          <a>
            <img src={keepIdle} className="keepIdle" alt="Keep Idle logo" />
            <p>Notes</p>
          </a>
        </li>

        <li>
          <a>
            <img src={bellIdle} className="bellIdle" alt="Bell Idle icon" />
            <p>Reminders</p>
          </a>
        </li>

        <li>
          <a>
            <img
              src={archiveIdle}
              className="archiveIdle"
              alt="Archive Idle icon"
            />
            <p>Archive</p>
          </a>
        </li>

        <li>
          <a>
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
