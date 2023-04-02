import React, { useState } from "react";
import addIcon from "/add.svg";
import addHover from "/addHover.svg";

function NoteArea({ onAdd }) {
  const [expanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleExpanded() {
    setExpanded(true);
  }

  function handleClose() {
    setExpanded(false);
  }

  function addButton(e) {
    onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    e.preventDefault();
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  return (
    <div className={expanded ? "expanded" : "notExpanded"}>
      <form>
        <div className="addNote">
          <img
            src={addIcon}
            className="addIcon"
            alt="Add Note"
            onClick={addButton}
          />
          <img
            src={addHover}
            className="addHover"
            alt="Add Hover Note"
            onClick={addButton}
          />
        </div>
        {expanded && (
          <input
            value={note.title}
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
          />
        )}
        <p>
          <textarea
            value={note.content}
            onClick={handleExpanded}
            name="content"
            placeholder="Take a note..."
            onChange={handleChange}
            rows="1"
          ></textarea>
        </p>
        <h3 onClick={handleClose}>Close</h3>
      </form>
    </div>
  );
}

export default NoteArea;
