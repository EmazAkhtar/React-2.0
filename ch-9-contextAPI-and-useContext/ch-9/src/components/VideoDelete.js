import React, { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
// import "./VideoDelete.css";
function VideoDelete({ dispatch, id }) {
  const themeContext = useContext(ThemeContext);

  const handleClick = () => {
    dispatch({ type: "DELETE", payload: id });
  };
  return (
    <div>
      <button className={themeContext} onClick={handleClick}>
        X
      </button>
    </div>
  );
}

export default VideoDelete;
