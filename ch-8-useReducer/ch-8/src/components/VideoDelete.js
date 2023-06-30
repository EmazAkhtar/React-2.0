import React from "react";
// import "./VideoDelete.css";
function VideoDelete({ dispatch, id }) {
  const handleClick = () => {
    dispatch({ type: "DELETE", payload: id });
  };
  return (
    <div>
      <button onClick={handleClick}>X</button>
    </div>
  );
}

export default VideoDelete;
