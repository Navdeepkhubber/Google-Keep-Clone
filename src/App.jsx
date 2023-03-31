import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import NoteArea from "./components/NoteArea";
import Sidebar from "./components/Sidebar";
import Note from "./components/Note";
import Trash from "./components/Trash";

function App(props) {
  const [notes, setNotes] = useState([]);
  const [trash, setTrash] = useState([]);
  const [showTrash, setShowTrash] = useState(false);
  const deletedNotes = trash.filter((note) => note.deleted);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNotes(id) {
    const deletedNote = notes[id];

    setNotes((prevNotes) => {
      return [...prevNotes.filter((note, index) => index !== id)];
    });

    setTrash((prevTrash) => {
      return [...prevTrash, deletedNote];
    });
  }

  function handleTrashClick() {
    setShowTrash(true);
  }

  return (
    <div className="App">
      <Header />
      <Sidebar
        handleTrashClick={handleTrashClick}
        showTrash={showTrash}
        trash={trash}
        setTrash={setTrash}
      />
      <NoteArea onAdd={addNote} />
      <div className="notes">
        {showTrash ? (
          <Trash trash={trash} setTrash={setTrash} notes={deletedNotes} />
        ) : (
          notes.map((note, index) => (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              onDelete={deleteNotes}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
