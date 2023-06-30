import React, { useState, memo } from "react";
import "./PlayButton.css";
import useThemes from "./hooks/Theme";

const PlayButton = memo(function PlayButton({
  message,
  children,
  onPlay,
  onPause,
}) {
  //   let playing = false; // don't use this approach;
  console.log("playbutton rendered");
  const themeContext = useThemes();

  const [playing, setPlaying] = useState(false);

  function handleClick(e) {
    console.log(e);
    e.stopPropagation();

    if (playing) onPause();
    else onPlay();

    setPlaying(!playing);
  }

  return (
    <button className={themeContext} onClick={handleClick}>
      {children} : {playing ? "⏸️" : "▶️"}
    </button>
  );
});

export default PlayButton;
