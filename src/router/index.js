import { Navigate } from "react-router-dom";
import About from "../pages/About";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
  { path: "/about", component: <About /> },
  { path: "/", component: <Home /> },
  { path: "/posts", component: <Posts /> },
  { path: "/posts/:id", component: <PostIdPage /> },
  { path: "/error", component: <Error /> },
  { path: "*", component: <Navigate replace to="/error" /> },
];

export const publicRoutes = [
  { path: "/login", component: <Login /> },
  { path: "*", component: <Navigate replace to="/login" /> },
];
