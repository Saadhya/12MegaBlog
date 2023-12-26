import React from "react";
import Fbtimeline from "./FB/fbtimeline";

const SocialPosts = () => {
  return (
    <div>
      <h1>Social posts will be here</h1>
      <hr />
      {/* create two components then call both in one file like fbtimeline as objects then call the timeline component in main post file */}
      <Fbtimeline.Posts />
      {/* you can pass props to the specific component */}
      <Fbtimeline.Reels title={"No reels"}/>
    </div>
  );
};

export default SocialPosts;
