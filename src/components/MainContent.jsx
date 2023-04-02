import React from "react";
import NoteArea from "./NoteArea";
import Note from "./Note";

function MainContent({ activeSection, onAdd, notes, onDelete }) {
  if (activeSection === "Notes" || activeSection === "Reminders") {
    return <NoteArea onAdd={onAdd} />;
  } else {
    return (
      <div className="notes">
        {notes.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default MainContent;
