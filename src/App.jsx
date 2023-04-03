import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import NoteArea from "./components/NoteArea";
import Sidebar from "./components/Sidebar";
import Note from "./components/Note";

function App(props) {
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem("notes");
    return storedNotes ? JSON.parse(storedNotes) : [];
  });

  const [selectedSection, setSelectedSection] = useState("");
  const [deletedNotes, setDeletedNotes] = useState(() => {
    const storeDeletedNotes = localStorage.getItem("deletedNotes");
    return storeDeletedNotes ? JSON.parse(storeDeletedNotes) : [];
  });

  const [isDeleted, setIsDeleted] = useState({});

  function addNote(newNote) {
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes, newNote];
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return updatedNotes;
    });
  }

  function deleteNotes(id) {
    setDeletedNotes((prevDeletedNotes) => {
      const deletedNote = notes[id];
      const updatedDeletedNotes = [...prevDeletedNotes, deletedNote];
      localStorage.setItem("deletedNotes", JSON.stringify(updatedDeletedNotes));
      return updatedDeletedNotes;
    });
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.filter((note, index) => index !== id);
      const updatedIsDeleted = { ...isDeleted };
      updatedIsDeleted[id] = true;
      setIsDeleted(updatedIsDeleted);
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      localStorage.setItem("isDeleted", JSON.stringify(updatedIsDeleted));
      return updatedNotes;
    });
  }

  function restoreNote(id) {
    setNotes((prevNotes) => {
      const restoredNote = deletedNotes[id];
      const updatedNotes = [...prevNotes, restoredNote];
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return updatedNotes;
    });
    setDeletedNotes((prevDeletedNotes) => {
      const updatedDeletedNotes = prevDeletedNotes.filter(
        (note, index) => index !== id
      );
      localStorage.setItem("deletedNotes", JSON.stringify(updatedDeletedNotes));
      return updatedDeletedNotes;
    });
  }

  function permanentlyDeleteNote(id) {
    setDeletedNotes((prevDeletedNotes) => {
      const updatedDeletedNotes = prevDeletedNotes.filter(
        (note, index) => index !== id
      );
      localStorage.setItem("deletedNotes", JSON.stringify(updatedDeletedNotes));
      return updatedDeletedNotes;
    });
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.filter((note, index) => index !== id);
      const updatedIsDeleted = { ...isDeleted };
      delete updatedIsDeleted[id];
      setIsDeleted(updatedIsDeleted);
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      localStorage.setItem("isDeleted", JSON.stringify(updatedIsDeleted));
      return updatedNotes;
    });
  }

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  const handleEmptyBin = () => {
    setDeletedNotes([]);
  };

  return (
    <div className="App">
      <Header selectedSection={selectedSection} />
      <Sidebar
        handleSectionChange={handleSectionChange}
        deleteNotes={deletedNotes}
        onEmptyBin={handleEmptyBin}
        selectedSection={selectedSection}
      />

      <div className="notes">
        <NoteArea onAdd={addNote} />

        {(selectedSection !== "Bin" ? notes : deletedNotes).map(
          (note, index) => (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              onDelete={deleteNotes}
              onRestore={restoreNote}
              onPermanentlyDelete={permanentlyDeleteNote}
              isDeleted={isDeleted[index]}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
