import PlayButton from "./PlayButton.js";
import Video from "./Video.js";
import VideoEdit from "./VideoEdit.js";
import VideoDelete from "./VideoDelete.js";
import useVideos from "./hooks/Videos.js";
import React, { useCallback, useMemo, useState } from "react";
import useVideoDispatch from "./hooks/VideosDispatch.js";
// import useVideoDispatch from "./hooks/VideosDispatch.js";
import moreData from "../data/moreData.js";
function VideoList({ onEdit }) {
  const videos = useVideos();
  const dispatch = useVideoDispatch();

  async function handleClick() {
    dispatch({ type: "INITIAL", payload: moreData });
  }

  const play = useCallback(() => console.log("Playing.."), []);
  const pause = useCallback(() => console.log("Paused.."), []);
  const memoButton = useMemo(
    () => (
      <PlayButton onPlay={play} onPause={pause}>
        Play
      </PlayButton>
    ),
    [play, pause]
  );
  // const defVideos = useDeferredValue(videos);

  return (
    <div>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        >
          {memoButton}
          <VideoDelete id={video.id}></VideoDelete>
          <VideoEdit editedToBeCopy={video} onEdit={onEdit}></VideoEdit>
        </Video>
      ))}
      <button onClick={handleClick}>"Get Videos"</button>
    </div>
  );
}

export default VideoList;
