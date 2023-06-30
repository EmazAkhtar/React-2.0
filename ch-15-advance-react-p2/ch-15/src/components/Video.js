import "./Video.css";
import React, { memo, useId } from "react";

// koi bhi component itna free ni hai ki wo bas component ko memoise krne se kaam chal jayega memo ke saath saath humko useMemo aur useCallback bhi use karna hota hai...
const Video = memo(function Video({
  title,
  id,
  channel = "Coder Dost",
  views,
  time,
  verified,
  children,
}) {
  const uid = useId();
  console.log("video rendered", id);

  return (
    <>
      <div id={uid} className="container">
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
});

export default Video;
