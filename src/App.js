import React, { useRef, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", desc: "desc desc desc desc" },
    { id: 2, title: "JS 1", desc: "desc desc desc desc" },
    { id: 3, title: "JS 2", desc: "desc desc desc desc" },
  ]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      desc,
    };

    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <form>
        <MyInput
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title"
        />
        <MyInput
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          type="text"
          placeholder="desc"
        />
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
      <PostList posts={posts} title="Post about JS" />
    </div>
  );
}

export default App;
