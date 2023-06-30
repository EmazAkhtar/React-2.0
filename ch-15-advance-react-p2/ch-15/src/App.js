// 1) memoizing values of a function...
// 2) memoizing the definition of a function ie; whole function itself...
// 3) memoizing components...

import React, {
  useReducer,
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
  lazy,
  Suspense,
} from "react";
import "./App.css";
import AddVideo from "./components/AddVideo";
import videosDB from "./data/data";
import VideoList from "./components/VideoList";
import ThemeContext from "./components/context/ThemeContext";
import VideoContext from "./components/context/VideoContext";
import VideoDispatchContext from "./components/context/VideoDispatchContext";
import Counter from "./components/Counter";
// import Dummy from "./components/Dummy";
const Dummy = lazy(() => import("./components/Dummy"));

function App() {
  const inputRef = useRef(null);
  const sizeRef = useRef(null);
  const [load, setLoad] = useState(false);

  useLayoutEffect(() => {
    const { height } = sizeRef.current.getBoundingClientRect();
    console.log(height);
  }, []);
  console.log("app rendered");
  const [videoToBeEdited, setVideoToBeEdited] = useState(null);
  const [mode, setMode] = useState("yellowMode");
  const videoReducer = (videos, action) => {
    switch (action.type) {
      case "INITIAL":
        return action.payload;
      case "ADD":
        return [
          ...videos,
          {
            ...action.payload,
            id: videos.length + 1,
          },
        ];
      case "DELETE":
        return videos.filter((video) => {
          return video.id !== action.payload;
        });
      case "UPDATE":
        const index = videos.findIndex((video) => {
          return video.id === action.payload.id;
        });
        let newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setVideoToBeEdited(null);
        return newVideos;

      default:
        return videos;
    }
  };
  const [videos, dispatch] = useReducer(videoReducer, videosDB);

  const editVideo = useCallback(function editVideo(editedToBeCopy) {
    setVideoToBeEdited(editedToBeCopy);
  }, []);
  const handleMode = () => {
    mode === "yellowMode" ? setMode("orangeMode") : setMode("yellowMode");
  };

  return (
    <>
      <ThemeContext.Provider value={mode}>
        <VideoContext.Provider value={videos}>
          <VideoDispatchContext.Provider value={dispatch}>
            <div
              ref={sizeRef}
              className={`App ${mode}`}
              onClick={() => console.log("App")}
            >
              <Counter></Counter>
              <button
                onClick={() => {
                  inputRef.current.jumpTo();
                }}
              >
                Focus
              </button>
              <button onClick={handleMode}>Mode</button>
              <div style={{ color: "white" }}>Videos</div>
              <AddVideo
                ref={inputRef}
                videoToBeEdited={videoToBeEdited}
              ></AddVideo>
              <VideoList onEdit={editVideo} />
              {load ? (
                <Suspense fallback={<>Loading...</>}>
                  <Dummy />
                </Suspense>
              ) : null}
              <button
                onClick={() => {
                  setLoad(true);
                }}
              >
                Load More
              </button>
            </div>
          </VideoDispatchContext.Provider>
        </VideoContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
