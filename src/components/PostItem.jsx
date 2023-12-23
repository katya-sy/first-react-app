import React from "react";

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <h2>
          <span>{props.number}</span>. {props.post.title}
        </h2>
        <div>{props.post.desc}</div>
      </div>
      <div className="post__btns">
        <button>Delete</button>
      </div>
    </div>
  );
};

export default PostItem;
