import { useState } from "react";
import "./App.css";
import AddVideo from "./components/AddVideo";
import videosDB from "./data/data";
import VideoList from "./components/VideoList";
function App() {
  console.log("app rendered");
  const [videos, setVideos] = useState(videosDB);
  const [videoToBeEdited, setVideoToBeEdited] = useState(null);
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

  const handleEdit = (videotobeedited) => {
    // let newVideos = videos;
    // newVideos = newVideos.filter((newVid) => {
    //   return newVid.id !== videotobeedited.id;
    // });
    // setVideos([...newVideos, videotobeedited]);
    const index = videos.findIndex((video) => {
      return video.id === videotobeedited.id;
    });
    let newVideos = [...videos];
    newVideos.splice(index, 1, videotobeedited);
    setVideos(newVideos);
  };
  const deleteVideo = (id) => {
    console.log(id);
    // let dups = videos;
    // dups = dups.filter((dup) => {
    //   return dup.id !== id;
    // });
    // setVideos(dups);
    setVideos(
      videos.filter((video) => {
        return video.id !== id;
      })
    );
  };

  const editVideo = (editedToBeCopy) => {
    setVideoToBeEdited(editedToBeCopy);
  };
  return (
    <div className="App" onClick={() => console.log("App")}>
      <div style={{ color: "white" }}>Videos</div>
      <AddVideo
        videoToBeEdited={videoToBeEdited}
        AddVideo={handleSubmit}
        EditVideo={handleEdit}
      ></AddVideo>
      <VideoList onDelete={deleteVideo} onEdit={editVideo} videos={videos} />
    </div>
  );
}

export default App;
