import { useReducer, useState } from "react";
import "./App.css";
import AddVideo from "./components/AddVideo";
import videosDB from "./data/data";
import VideoList from "./components/VideoList";
import ThemeContext from "./components/context/ThemeContext";
import VideoContext from "./components/context/VideoContext";
import VideoDispatchContext from "./components/context/VideoDispatchContext";
function App() {
  console.log("app rendered");
  const [videoToBeEdited, setVideoToBeEdited] = useState(null);
  const [mode, setMode] = useState("yellowMode");
  const videoReducer = (videos, action) => {
    switch (action.type) {
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
            </div>
          </VideoDispatchContext.Provider>
        </VideoContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
