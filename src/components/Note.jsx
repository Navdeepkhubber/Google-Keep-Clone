import React from "react";
import deleteIcon from "/sidebar/binIdle.svg";

function Note({ title, content, onDelete, id }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <img src={deleteIcon} onClick={() => onDelete(id)} />
    </div>
  );
}

export default Note;
