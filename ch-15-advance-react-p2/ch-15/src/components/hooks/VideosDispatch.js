import { useContext } from "react";
import VideoDispatchContext from "../context/VideoDispatchContext";

const useVideoDispatch = () => {
  const videosDispatch = useContext(VideoDispatchContext);
  return videosDispatch;
};

export default useVideoDispatch;
