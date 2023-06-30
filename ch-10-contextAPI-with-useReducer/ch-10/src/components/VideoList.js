import React, { useContext } from "react";
import PlayButton from "./PlayButton.js";
import Video from "./Video.js";
import VideoEdit from "./VideoEdit.js";
import VideoDelete from "./VideoDelete.js";
import useVideos from "./hooks/Videos.js";

function VideoList({ onEdit }) {
  const videos = useVideos();

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
    </div>
  );
}

export default VideoList;
