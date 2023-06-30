import React, { useContext, useEffect, useState } from "react";
import NoteDispatchContext from "./context/NoteDispatchContext";

function CreateArea({ videoToBeEdited }) {
  const dispatch = useContext(NoteDispatchContext);
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
    id: "",
    key: "",
  });
  useEffect(() => {
    if (videoToBeEdited !== null) {
      setNewNote(videoToBeEdited);
    }
  }, [videoToBeEdited]);

  function handleChange(event) {
    const { name, value } = event.target;
    setNewNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  const handleClick = (event) => {
    event.preventDefault();
    if (videoToBeEdited !== null) {
      dispatch({ type: "EDIT", payload: newNote });
      setNewNote({ title: "", content: "", id: "", key: "" });
    } else {
      dispatch({ type: "ADD", payload: newNote });
      setNewNote({ title: "", content: "", id: "", key: "" });
    }
  };
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={newNote.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={newNote.content}
        />
        <button onClick={handleClick}>
          {videoToBeEdited ? "Edit" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
