import React, { useState, useEffect, useContext } from "react";
import "./AddVideo.css";
import ThemeContext from "./context/ThemeContext";
function AddVideo({ dispatch, videoToBeEdited }) {
  const themeContext = useContext(ThemeContext);
  const [video, setVideo] = useState({
    time: "1 month ago",
    channel: "Coder Dost",
    verified: true,
    title: "",
    views: "",
  });

  useEffect(() => {
    if (videoToBeEdited) {
      setVideo(videoToBeEdited);
    }
  }, [videoToBeEdited]);

  // if (videoToBeEdited) {
  //   setVideo(videoToBeEdited);
  // }
  const handleChange = (e) => {
    console.log(e);
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

    if (videoToBeEdited) {
      dispatch({ type: "UPDATE", payload: video });
      setVideo({
        time: "1 month ago",
        channel: "Coder Dost",
        verified: true,
        title: "",
        views: "",
      });
    } else {
      dispatch({ type: "ADD", payload: video });
      setVideo({
        time: "1 month ago",
        channel: "Coder Dost",
        verified: true,
        title: "",
        views: "",
      });
    }
  };
  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          type="text"
          placeholder="title"
          value={video.title}
        ></input>
        <input
          name="views"
          onChange={handleChange}
          type="text"
          placeholder="views"
          value={video.views}
        ></input>
        <button className={themeContext} onClick={handleClick} type="submit">
          {videoToBeEdited ? "Edit Video" : "Add Video"}
        </button>
      </form>
    </div>
  );
}

export default AddVideo;
