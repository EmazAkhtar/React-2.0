import React from "react";

function VideoEdit({ onEdit, editedToBeCopy }) {
  const handleClick = () => {
    onEdit(editedToBeCopy);
  };
  return (
    <div>
      <button onClick={handleClick}>Edit</button>
    </div>
  );
}

export default VideoEdit;
