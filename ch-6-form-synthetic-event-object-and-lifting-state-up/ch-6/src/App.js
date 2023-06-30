import { useState } from "react";
import "./App.css";
import AddVideo from "./components/AddVideo";
import videosDB from "./data/data";
import VideoList from "./components/VideoList";
function App() {
  console.log("app rendered");
  const [videos, setVideos] = useState(videosDB);
  const handleSubmit = (video) => {
    setVideos((videos) => {
      return [
        ...videos,
        {
          ...video,
          id: videos.length + 1,
        },
      ];
    });
  };
  return (
    <div className="App" onClick={() => console.log("App")}>
      <div style={{ color: "white" }}>Videos</div>
      <AddVideo AddVideo={handleSubmit}></AddVideo>
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
