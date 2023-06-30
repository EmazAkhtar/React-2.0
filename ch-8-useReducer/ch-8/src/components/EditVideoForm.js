import React, { useEffect, useState } from "react";
import "./EditVideoForm.css";

function EditVideoForm({ dispatch, videoToBeEdited }) {
  const [video, setVideo] = useState({ ...videoToBeEdited });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setVideo((video) => {
      return {
        ...video,
        [name]: value,
      };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();

    dispatch({ type: "UPDATE", payload: video });
  };
  return (
    <div className="editVideo">
      <form className="editVideoForm">
        <input
          onChange={handleChange}
          name="title"
          value={video.title}
          placeholder="title"
        />
        <input
          onChange={handleChange}
          name="views"
          value={video.views}
          placeholder="views"
        />
        <button onClick={handleClick}>Edit</button>
      </form>
    </div>
  );
}

export default EditVideoForm;
