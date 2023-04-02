import React from "react";
import deleteIcon from "/bin.svg";
import archiveIcon from "/Sidebar/archiveIdle.svg";

function Note({ title, content, onDelete, id }) {
  const isEmpty = !content;

  return (
    <div className="note" style={{ height: isEmpty ? "65px" : "auto" }}>
      <h1>{title}</h1>
      {isEmpty ? <p style={{ color: "grey" }}>Empty note</p> : <p>{content}</p>}

      <div className="noteIcons">
        <img src={deleteIcon} onClick={() => onDelete(id)} />
        <img src={archiveIcon} className="archiveIcon" />
      </div>
    </div>
  );
}

export default Note;
