import React, { useState } from "react";
import keepBlack from "/Sidebar/keepBlack.svg";
import bellIdle from "/Sidebar/bellIdle.svg";
import editIdle from "/Sidebar/editIdle.svg";
import archiveIdle from "/Sidebar/archiveIdle.svg";
import binIdle from "/Sidebar/binIdle.svg";
import "./Sidebar.css";

export default function Sidebar({ menu }) {
  return (
    <div className={"sidebar"}>
      <ul>
        <li>
          <a>
            <img src={keepBlack} className="keepBlack" alt="Keep Black logo" />
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
            <img src={editIdle} className="editIdle" alt="Edit Idle icon" />
            <p>Edit Labels</p>
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
    </div>
  );
}
