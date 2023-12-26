import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import Home from "../pages/Home";
import PostIdPage from "../pages/PostIdPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />}></Route>
      <Route path="/posts" element={<Posts />}></Route>
      <Route path="/posts/:id" element={<PostIdPage />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/error" element={<Error />}></Route>
      <Route path="*" element={<Navigate replace to="/error" />}></Route>
    </Routes>
  );
};

export default AppRouter;
