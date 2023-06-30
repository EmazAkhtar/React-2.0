import { useState } from "react";
import "./PlayButton.css";

function PlayButton({ message, children, onPlay, onPause }) {
  //   let playing = false; // don't use this approach;
  console.log("playbutton rendered");
  const [playing, setPlaying] = useState(false);

  function handleClick(e) {
    console.log(e);
    e.stopPropagation();

    if (playing) onPause();
    else onPlay();

    setPlaying(!playing);
  }

  return (
    <button onClick={handleClick}>
      {children} : {playing ? "⏸️" : "▶️"}
    </button>
  );
}

export default PlayButton;
