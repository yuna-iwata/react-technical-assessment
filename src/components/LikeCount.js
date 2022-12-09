import React from "https://dev.jspm.io/react@17.0";

export default function LikeCount(props) {
  return (
    <div>
      <p id="like-count">Liked: {props.likeCount}</p>
      <p id="dislike-count">Disliked: {props.dislikeCount}</p>
      <p id="superlike-count">Superliked: {props.superlikeCount}</p>
    </div>
  );
}
