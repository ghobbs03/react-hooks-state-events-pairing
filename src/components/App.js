import video from "../data/video.js";
import Details from "./Details.js";
import CommentList from "./CommentList.js";
import { useState } from "react";

function App() {
  console.log("Here's your data:", video);

  const [likes, setLikes] = useState(video.upvotes);
  const [dislikes, setDislikes] = useState(video.downvotes);
  const [comments, setComments] = useState(video.comments); 


  function handleLike() {
    setLikes(likes + 1);
  }

  function handleDislike() {
    setDislikes(dislikes + 1);
  }

  function handleHide() {
    setComments(null);
  }

  const commentList = comments ? <CommentList comments={comments} /> : <CommentList />;


  return (
    <div>
      <Details url={video.embedUrl} title={video.title} views={video.views} date={video.createdAt} upvotes={likes} downvotes={dislikes} handleLike={handleLike} handleDislike={handleDislike} handleHide={handleHide}/>
      {commentList}
    </div>
  );
}

export default App;
