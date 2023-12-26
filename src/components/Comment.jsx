import React from "react";

const Comment = (name, email, body) => {
  return (
    <div>
      <h3>{name}</h3>
      <h4>{email}</h4>
      <p>{body}</p>
    </div>
  );
};

export default Comment;
