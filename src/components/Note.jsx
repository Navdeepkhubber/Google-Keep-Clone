import React from "react";
import deleteIcon from "/bin.svg";
import archiveIcon from "/Sidebar/archiveIdle.svg";
import restoreIcon from "/restore.svg";
import permanentlyDeleteIcon from "/deletePermanent.svg";

function Note({
  title,
  content,
  onDelete,
  id,
  onRestore,
  onPermanentlyDelete,
  isDeleted,
}) {
  const isEmpty = !content;
  if (!title) {
    return null; // don't render this note if it doesn't have a title
  }

  return (
    <div className="note" style={{ height: isEmpty ? "65px" : "auto" }}>
      <h1>{title}</h1>
      {isEmpty ? <p style={{ color: "grey" }}>Empty note</p> : <p>{content}</p>}

      <div className="noteIcons">
        {isDeleted ? (
          <>
            <img src={restoreIcon} onClick={() => onRestore(id)} />
            <img
              src={permanentlyDeleteIcon}
              onClick={() => onPermanentlyDelete(id)}
            />
          </>
        ) : (
          <>
            <img src={deleteIcon} onClick={() => onDelete(id)} />
            <img src={archiveIcon} className="archiveIcon" />
          </>
        )}
      </div>
    </div>
  );
}

export default Note;
