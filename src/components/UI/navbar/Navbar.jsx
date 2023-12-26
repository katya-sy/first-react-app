import React, { useContext } from "react";
import { AuthContext } from "../../../context";
import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  return (
    <div className="navbar">
      {isAuth ? (
        <MyButton
          style={{ background: "white" }}
          onClick={() => setIsAuth(false)}
        >
          Log out
        </MyButton>
      ) : (
        <div></div>
      )}
      <div className="navbar__links">
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
};

export default Navbar;
