import { useContext, useDebugValue } from "react";
import VideoContext from "../context/VideoContext";

const useVideos = () => {
  const videos = useContext(VideoContext);
  useDebugValue(videos.length);
  return videos;
};
export default useVideos;
