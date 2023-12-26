import React, { useContext } from "react";
import { AuthContext } from "../context";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
    navigate("/");
  };

  return (
    <div>
      <h1>Authorization</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Login" />
        <MyInput type="password" placeholder="Password" />
        <MyButton>Login</MyButton>
      </form>
    </div>
  );
};

export default Login;
