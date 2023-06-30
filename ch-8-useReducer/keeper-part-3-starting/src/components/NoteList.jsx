import React from "react";
import Note from "./Note";

function NoteList({ notesArray, dispatch, onEdit }) {
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
            dispatch={dispatch}
          />
        );
      })}
    </div>
  );
}

export default NoteList;
