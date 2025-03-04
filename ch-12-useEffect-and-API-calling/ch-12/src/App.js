import React, { useReducer, useRef, useState } from "react";
import "./App.css";
import AddVideo from "./components/AddVideo";
// import videosDB from "./data/data";
import VideoList from "./components/VideoList";
import ThemeContext from "./components/context/ThemeContext";
import VideoContext from "./components/context/VideoContext";
import VideoDispatchContext from "./components/context/VideoDispatchContext";
function App() {
  // const url = "https://my.api.mockaroo.com/use_effect.json?key=3c0120c0";

  const inputRef = useRef("");

  // useEffect(() => {
  //   const res = axios.get(url);
  //   dispatch({ type: "INITIAL", payload: res.data });
  // }, []);
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
  const [videos, dispatch] = useReducer(videoReducer, []);

  // yahan h context
  // const themeContext = useContext(ThemeContext);
  // console.log(themeContext);

  const editVideo = (editedToBeCopy) => {
    setVideoToBeEdited(editedToBeCopy);
  };
  const handleMode = () => {
    mode === "yellowMode" ? setMode("orangeMode") : setMode("yellowMode");
  };

  return (
    <>
      <ThemeContext.Provider value={mode}>
        <VideoContext.Provider value={videos}>
          <VideoDispatchContext.Provider value={dispatch}>
            <div className={`App ${mode}`} onClick={() => console.log("App")}>
              <button onClick={handleMode}>Mode</button>
              <div style={{ color: "white" }}>Videos</div>
              <AddVideo videoToBeEdited={videoToBeEdited}></AddVideo>
              <VideoList onEdit={editVideo} />
              <input ref={inputRef}></input>
            </div>
          </VideoDispatchContext.Provider>
        </VideoContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
