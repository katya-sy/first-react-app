import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", desc: "desc desc desc desc" },
    { id: 2, title: "JS 1", desc: "desc desc desc desc" },
    { id: 3, title: "JS 2", desc: "desc desc desc desc" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");

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

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Sort"
        options={[
          { value: "title", name: "By title" },
          { value: "desc", name: "By desc" },
        ]}
      />
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="Post about JS" />
      ) : (
        <h2 style={{ textAlign: "center" }}>No posts</h2>
      )}
    </div>
  );
}

export default App;
