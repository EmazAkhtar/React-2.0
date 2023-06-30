import { useReducer, useState } from "react";
import "./App.css";
import AddVideo from "./components/AddVideo";
import videosDB from "./data/data";
import VideoList from "./components/VideoList";
import EditVideoForm from "./components/EditVideoForm";
function App() {
  console.log("app rendered");
  // const [videos, setVideos] = useState(videosDB);
  const [videoToBeEdited, setVideoToBeEdited] = useState(null);
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

  const editVideo = (editedToBeCopy) => {
    setVideoToBeEdited(editedToBeCopy);
  };
  return (
    <div className="App" onClick={() => console.log("App")}>
      <div style={{ color: "white" }}>Videos</div>
      {videoToBeEdited !== null && (
        <EditVideoForm dispatch={dispatch} videoToBeEdited={videoToBeEdited} />
      )}
      <AddVideo
        videoToBeEdited={videoToBeEdited}
        dispatch={dispatch}
      ></AddVideo>
      <VideoList dispatch={dispatch} onEdit={editVideo} videos={videos} />
    </div>
  );
}

export default App;
