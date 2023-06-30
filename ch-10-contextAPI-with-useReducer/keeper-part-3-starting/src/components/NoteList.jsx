import React, { useContext } from "react";
import Note from "./Note";
import NoteContext from "./context/NoteContext";

function NoteList({ onEdit }) {
  const notesArray = useContext(NoteContext);
  return (
    <div>
      {notesArray.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onEdit={onEdit}
          />
        );
      })}
    </div>
  );
}

export default NoteList;
