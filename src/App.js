import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/postList";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", desc: "desc desc desc desc" },
    { id: 2, title: "JS 1", desc: "desc desc desc desc" },
    { id: 3, title: "JS 2", desc: "desc desc desc desc" },
  ]);
  const [posts2, setPosts2] = useState([
    { id: 1, title: "Python", desc: "desc desc desc desc" },
    { id: 2, title: "Python 1", desc: "desc desc desc desc" },
    { id: 3, title: "Python 2", desc: "desc desc desc desc" },
  ]);
  const [posts3, setPosts3] = useState([
    { id: 1, title: "Java", desc: "desc desc desc desc" },
    { id: 2, title: "Java 2", desc: "desc desc desc desc" },
    { id: 3, title: "Java 3", desc: "desc desc desc desc" },
  ]);
  return (
    <div className="App">
      <PostList posts={posts} title="Post about JS" />
      <PostList posts={posts2} title="Post about Python" />
      <PostList posts={posts3} title="Post about Java" />
    </div>
  );
}

export default App;
