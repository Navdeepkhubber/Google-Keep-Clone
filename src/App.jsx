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

  const [archivedNotes, setArchivedNotes] = useState(() => {
    const storeArchivedNotes = localStorage.getItem("archivedNotes");
    return storeArchivedNotes ? JSON.parse(storeArchivedNotes) : [];
  });

  const [isArchived, setIsArchived] = useState({});

  const [isDeleted, setIsDeleted] = useState({});

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  function addNote(newNote) {
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes, newNote];
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return updatedNotes;
    });
  }

  function deleteNotes(id) {
    if (isArchived[id]) {
      setArchivedNotes((prevArchivedNotes) => {
        const updatedArchivedNotes = prevArchivedNotes.filter(
          (note, index) => index !== id
        );
        localStorage.setItem(
          "archivedNotes",
          JSON.stringify(updatedArchivedNotes)
        );
        return updatedArchivedNotes;
      });
    } else {
      setDeletedNotes((prevDeletedNotes) => {
        const deletedNote = notes[id];
        const updatedDeletedNotes = [...prevDeletedNotes, deletedNote];
        localStorage.setItem(
          "deletedNotes",
          JSON.stringify(updatedDeletedNotes)
        );
        return updatedDeletedNotes;
      });
    }
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.filter((note, index) => index !== id);
      const updatedIsDeleted = { ...isDeleted };
      updatedIsDeleted[id] = true;
      setIsDeleted(updatedIsDeleted);
      if (isArchived[id]) {
        const updatedIsArchived = { ...isArchived };
        delete updatedIsArchived[id];
        setIsArchived(updatedIsArchived);
        localStorage.setItem("isArchived", JSON.stringify(updatedIsArchived));
      }
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      localStorage.setItem("isDeleted", JSON.stringify(updatedIsDeleted));
      return updatedNotes;
    });
  }

  function archiveNotes(id) {
    setArchivedNotes((prevArchivedNotes) => {
      const archivedNote = notes[id];
      const updatedArchivedNotes = [...prevArchivedNotes, archivedNote];
      localStorage.setItem(
        "archivedNotes",
        JSON.stringify(updatedArchivedNotes)
      );
      return updatedArchivedNotes;
    });
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.filter((note, index) => index !== id);
      const updatedIsArchived = { ...isArchived };
      updatedIsArchived[id] = true;
      setIsArchived(updatedIsArchived);
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      localStorage.setItem("isArchived", JSON.stringify(updatedIsArchived));
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
    setIsDeleted((prevIsDeleted) => {
      const updatedIsDeleted = { ...prevIsDeleted };
      delete updatedIsDeleted[id];
      localStorage.setItem("isDeleted", JSON.stringify(updatedIsDeleted));
      return updatedIsDeleted;
    });
  }

  function unArchiveNotes(id) {
    setNotes((prevNotes) => {
      const unArchivedNote = archivedNotes[id];
      const updatedNotes = [...prevNotes, unArchivedNote];
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return updatedNotes;
    });
    setArchivedNotes((prevArchivedNotes) => {
      const updatedArchivedNotes = prevArchivedNotes.filter(
        (note, index) => index !== id
      );
      localStorage.setItem(
        "archivedNotes",
        JSON.stringify(updatedArchivedNotes)
      );
      return updatedArchivedNotes;
    });
    setIsArchived((prevIsArchived) => {
      const updatedIsArchived = { ...prevIsArchived };
      delete updatedIsArchived[id];
      localStorage.setItem("isArchived", JSON.stringify(updatedIsArchived));
      return updatedIsArchived;
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
      <Header selectedSection={selectedSection} toggleSidebar={toggleSidebar} />
      <Sidebar
        handleSectionChange={handleSectionChange}
        deleteNotes={deletedNotes}
        onEmptyBin={handleEmptyBin}
        selectedSection={selectedSection}
        archivedNotes={archivedNotes}
        isSidebarOpen={isSidebarOpen}
      />

      <div className="notes">
        <NoteArea onAdd={addNote} />

        {(selectedSection === "Archives"
          ? archivedNotes
          : selectedSection === "Bin"
          ? deletedNotes
          : notes
        ).map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNotes}
            onRestore={restoreNote}
            onPermanentlyDelete={permanentlyDeleteNote}
            isDeleted={isDeleted[index]}
            onArchive={archiveNotes}
            isArchived={isArchived[index]}
            onUnArchive={unArchiveNotes}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
