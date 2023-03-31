import React from "react";
import Note from "./Note";
import "./Trash.css";

function Trash({ trash, setTrash }) {
  return (
    <div className="trash">
      <div className="deletedNote">
        {trash.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={() =>
              setTrash((prevTrash) =>
                prevTrash.filter((note, i) => i !== index)
              )
            }
            isDeleted={true}
          />
        ))}
      </div>
    </div>
  );
}

export default Trash;
