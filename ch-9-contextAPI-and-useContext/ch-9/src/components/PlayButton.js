import { useContext, useState } from "react";
import "./PlayButton.css";
import ThemeContext from "./context/ThemeContext";

function PlayButton({ message, children, onPlay, onPause }) {
  //   let playing = false; // don't use this approach;
  console.log("playbutton rendered");
  const themeContext = useContext(ThemeContext);

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
}

export default PlayButton;
