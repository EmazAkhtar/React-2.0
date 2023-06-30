import React, {
  useState,
  useEffect,
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";
import { createPortal } from "react-dom";
import useVideoDispatch from "./hooks/VideosDispatch";
import useThemes from "./hooks/Theme";

const AddVideo = forwardRef(function AddVideo({ videoToBeEdited }, ref) {
  // const inputReff = useRef(null);
  const iRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        jumpTo() {
          iRef.current.focus();
        },
      };
    },
    []
  );
  useEffect(() => {
    if (videoToBeEdited) {
      setVideo(videoToBeEdited);
    }
    // inputReff.current.value = "demo";
    // inputReff.current.focus();
  }, [videoToBeEdited]);

  const themeContext = useThemes();
  const dispatch = useVideoDispatch();

  const [video, setVideo] = useState({
    time: "1 month ago",
    channel: "Coder Dost",
    verified: true,
    title: "",
    views: "",
  });

  // if (videoToBeEdited) {
  //   setVideo(videoToBeEdited);
  // }
  const handleChange = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    setVideo((video) => {
      return {
        ...video,
        [name]: value,
      };
    });
  };
  const handleClick = (e) => {
    e.preventDefault();

    if (videoToBeEdited) {
      dispatch({ type: "UPDATE", payload: video });
      setVideo({
        time: "1 month ago",
        channel: "Coder Dost",
        verified: true,
        title: "",
        views: "",
      });
    } else {
      dispatch({ type: "ADD", payload: video });
      setVideo({
        time: "1 month ago",
        channel: "Coder Dost",
        verified: true,
        title: "",
        views: "",
      });
    }
  };
  return (
    <div>
      <form>
        <input
          ref={iRef}
          name="title"
          onChange={handleChange}
          type="text"
          placeholder="title"
          value={video.title}
        ></input>
        <input
          name="views"
          onChange={handleChange}
          type="text"
          placeholder="views"
          value={video.views}
        ></input>
        <button className={themeContext} onClick={handleClick} type="submit">
          {videoToBeEdited ? "Edit Video" : "Add Video"}
        </button>
        {createPortal(
          <p>This child is placed inside the root1 body.</p>,
          document.getElementById("root1")
        )}
      </form>
    </div>
  );
});

export default AddVideo;
