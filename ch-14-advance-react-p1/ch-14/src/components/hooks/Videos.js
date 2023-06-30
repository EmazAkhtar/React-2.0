import { useContext } from "react";
import VideoContext from "../context/VideoContext";

const useVideos = () => {
  const videos = useContext(VideoContext);
  return videos;
};
export default useVideos;
