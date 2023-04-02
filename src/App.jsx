import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import NoteArea from "./components/NoteArea";
import Sidebar from "./components/Sidebar";
import Note from "./components/Note";

function App(props) {
  const [notes, setNotes] = useState([]);
  const [selectedSection, setSelectedSection] = useState("");

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNotes(id) {
    setNotes((prevNotes) => {
      return [...prevNotes.filter((note, index) => index !== id)];
    });
  }

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="App">
      <Header selectedSection={selectedSection} />
      <Sidebar handleSectionChange={handleSectionChange} />

      <div className="notes">
        <NoteArea onAdd={addNote} />
        {notes.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNotes}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
