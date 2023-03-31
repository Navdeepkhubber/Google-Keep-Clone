import React from "react";
import deleteIcon from "/bin.svg";
import archiveIcon from "/Sidebar/archiveIdle.svg";

function Note({ title, content, onDelete, id, isDeleted }) {
  const isEmpty = !content;

  return (
    <div
      className={`note${isDeleted ? "deletedNote" : ""}`}
      style={{ height: isEmpty ? "65px" : "auto" }}
    >
      <h1>{title}</h1>
      {isEmpty ? <p style={{ color: "grey" }}>Empty note</p> : <p>{content}</p>}

      <div className="noteIcons">
        {isDeleted ? null : (
          <img src={deleteIcon} onClick={() => onDelete(id)} />
        )}
        <img src={archiveIcon} className="archiveIcon" />
      </div>
    </div>
  );
}

export default Note;
