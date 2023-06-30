import React from "react";
import useVideoDispatch from "./hooks/VideosDispatch";
import useThemes from "./hooks/Theme";

function VideoDelete({ id }) {
  const themeContext = useThemes();
  const dispatch = useVideoDispatch();

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
