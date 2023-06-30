import React from "react";
// import "./VideoDelete.css";
function VideoDelete({ onDelete, id }) {
  const handleClick = () => {
    onDelete(id);
  };
  return (
    <div>
      <button onClick={handleClick}>X</button>
    </div>
  );
}

export default VideoDelete;
