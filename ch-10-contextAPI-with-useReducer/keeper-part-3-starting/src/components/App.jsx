import React, { useReducer, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import NoteList from "./NoteList";
import NoteContext from "./context/NoteContext";
import NoteDispatchContext from "./context/NoteDispatchContext";

function App() {
  const [videoToBeEdited, setVideoToBeEdited] = useState(null);

  const notesArrayReducer = (notesArray, action) => {
    switch (action.type) {
      case "ADD":
        return [...notesArray, action.payload];

      case "DELETE":
        return notesArray.filter((value, index) => {
          return index !== action.payload;
        });
      case "EDIT":
        const newNotesArray = notesArray.filter((note) => {
          return note.id !== action.payload.id;
        });
        newNotesArray.push(action.payload);
        setVideoToBeEdited(null);
        return newNotesArray;
      default:
        return notesArray;
    }
  };

  const handleEdit = (id) => {
    const editedItem = notesArray.reduce((currentItem) => {
      return currentItem.id === id;
    });
    console.log(editedItem);
    setVideoToBeEdited(editedItem);
  };
  const [notesArray, dispatch] = useReducer(notesArrayReducer, []);
  return (
    <div>
      <NoteContext.Provider value={notesArray}>
        <NoteDispatchContext.Provider value={dispatch}>
          <Header />
          <CreateArea videoToBeEdited={videoToBeEdited} />
          <NoteList onEdit={handleEdit}></NoteList>
          {/* <Footer /> */}
        </NoteDispatchContext.Provider>
      </NoteContext.Provider>
    </div>
  );
}

export default App;
