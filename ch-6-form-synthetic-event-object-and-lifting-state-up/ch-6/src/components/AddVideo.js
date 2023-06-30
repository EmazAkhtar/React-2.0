import React, { useState } from "react";
import "./AddVideo.css";
function AddVideo({ AddVideo }) {
  const [video, setVideo] = useState({
    time: "1 month ago",
    channel: "Coder Dost",
    verified: true,
    title: "",
    views: "",
  });
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
    AddVideo(video);
    setVideo({
      time: "1 month ago",
      channel: "Coder Dost",
      verified: true,
      title: "",
      views: "",
    });
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
        <button onClick={handleClick} type="submit">
          Add Video
        </button>
      </form>
    </div>
  );
}

export default AddVideo;
