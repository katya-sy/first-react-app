import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", desc: "desc desc desc desc" },
    { id: 2, title: "JS 1", desc: "desc desc desc desc" },
    { id: 3, title: "JS 2", desc: "desc desc desc desc" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(
      posts.filter((p) => {
        return p.id !== post.id;
      })
    );
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title="Post about JS" />
      ) : (
        <h2 style={{ textAlign: "center" }}>No posts</h2>
      )}
    </div>
  );
}

export default App;
