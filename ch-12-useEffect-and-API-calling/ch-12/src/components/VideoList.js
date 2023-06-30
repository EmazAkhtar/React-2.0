import PlayButton from "./PlayButton.js";
import Video from "./Video.js";
import VideoEdit from "./VideoEdit.js";
import VideoDelete from "./VideoDelete.js";
import useVideos from "./hooks/Videos.js";
import axios from "axios";
import React, { useEffect } from "react";
import useVideoDispatch from "./hooks/VideosDispatch.js";

function VideoList({ onEdit }) {
  const url = "https://my.api.mockaroo.com/use_effect.json?key=3c0120c0";

  const videos = useVideos();
  const dispatch = useVideoDispatch();

  async function handleClick() {
    const res = await axios.get(url);
    console.log("getVideos", res);
    dispatch({ type: "INITIAL", payload: res.data });
  }

  useEffect(() => {
    async function getVideos() {
      const res = await axios.get(url);
      console.log("getVideos", res);
      dispatch({ type: "INITIAL", payload: res.data });
    }
    getVideos();
  }, [dispatch]);
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
          <PlayButton
            onPlay={() => console.log("Playing..", video.title)}
            onPause={() => console.log("Paused..", video.title)}
          >
            {video.title}
          </PlayButton>
          <VideoDelete id={video.id}></VideoDelete>
          <VideoEdit editedToBeCopy={video} onEdit={onEdit}></VideoEdit>
        </Video>
      ))}
      <button onClick={handleClick}>Get Videos</button>
    </div>
  );
}

export default VideoList;
