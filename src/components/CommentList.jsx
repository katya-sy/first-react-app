import React from "react";
import Comment from "./Comment";

const CommentList = (comments) => {
  // console.log(comments);
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id} style={{ marginTop: "20px" }}>
          <Comment
            name={comment.name}
            email={comment.email}
            body={comment.body}
          />
        </div>
      ))}
    </div>
  );
};

export default CommentList;
