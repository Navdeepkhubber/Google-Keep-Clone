import React, { useState } from "react";
import deleteIcon from "/bin.svg";
import archiveIcon from "/Sidebar/archiveIdle.svg";
import restoreIcon from "/restore.svg";
import permanentlyDeleteIcon from "/deletePermanent.svg";
import unArchiveIcon from "/unarchive.svg";
import editIcon from "/Sidebar/editIdle.svg";
import saveIcon from "/save.svg";
import closeIcon from "/close.svg";

function Note({
  title,
  content,
  onDelete,
  id,
  onRestore,
  onPermanentlyDelete,
  isDeleted,
  onArchive,
  isArchived,
  onUnArchive,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);

  const isEmpty = !content;
  if (!title) {
    return null;
  }

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleCancelClick() {
    setIsEditing(false);
    setEditedTitle(title);
    setEditedContent(content);
  }

  function handleSaveClick() {
    setIsEditing(false);
    const editedNote = {
      title: editedTitle,
      content: editedContent,
    };
    onEdit(id, editedNote);
  }

  return (
    <div className="note" style={{ height: isEmpty ? "65px" : "auto" }}>
      {isEditing ? (
        <>
          <div className="editBox">
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
          </div>
          <div className="editIcons">
            <img src={saveIcon} onClick={handleSaveClick} />
            <img src={closeIcon} onClick={handleCancelClick} />
          </div>
        </>
      ) : (
        <>
          <h1>{editedTitle}</h1>
          {isEmpty ? (
            <p style={{ color: "grey" }}>Empty note</p>
          ) : (
            <p>{editedContent}</p>
          )}

          <div className="noteIcons">
            {isDeleted ? (
              <div className="deletedIcons">
                <img src={restoreIcon} onClick={() => onRestore(id)} />
                <img
                  src={permanentlyDeleteIcon}
                  onClick={() => onPermanentlyDelete(id)}
                />
              </div>
            ) : isArchived ? (
              <div className="archivedIcons">
                <img src={unArchiveIcon} onClick={() => onUnArchive(id)} />
              </div>
            ) : (
              <>
                <img src={deleteIcon} onClick={() => onDelete(id)} />
                <img
                  src={archiveIcon}
                  className="archiveIcon"
                  onClick={() => onArchive(id)}
                />
                <img
                  src={editIcon}
                  className="editIcon"
                  onClick={handleEditClick}
                />
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Note;
