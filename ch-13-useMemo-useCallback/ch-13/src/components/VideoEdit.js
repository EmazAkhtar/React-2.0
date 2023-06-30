import React from "react";
import useThemes from "./hooks/Theme";

function VideoEdit({ onEdit, editedToBeCopy }) {
  const themeContext = useThemes();

  const handleClick = () => {
    onEdit(editedToBeCopy);
  };
  return (
    <div>
      <button className={themeContext} onClick={handleClick}>
        Edit
      </button>
    </div>
  );
}

export default VideoEdit;
