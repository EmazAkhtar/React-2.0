import { useEffect } from "react";
import "./Video.css";

function Video({
  title,
  id,
  channel = "Coder Dost",
  views,
  time,
  verified,
  children,
}) {
  useEffect(() => {
    const idx = setInterval(() => {
      console.log(id);
    }, 3000);

    return () => {
      clearInterval(idx);
    };
  }, [id]);

  console.log("video rendered");

  return (
    <>
      <div className="container">
        <div className="pic">
          <img
            src={`https://picsum.photos/id/${id}/160/90`}
            alt="Katherine Johnson"
          />
        </div>
        <div className="title">{title}</div>
        <div className="channel">
          {channel} {verified && "✅"}{" "}
        </div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}

export default Video;
