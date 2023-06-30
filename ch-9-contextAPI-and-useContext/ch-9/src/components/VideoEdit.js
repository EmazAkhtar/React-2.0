import React, { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

function VideoEdit({ onEdit, editedToBeCopy }) {
  const themeContext = useContext(ThemeContext);

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
