import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <Link to="/home">
        <h1>Home</h1>
      </Link>

      <Link to="/">
        <h1>sign in </h1>
      </Link>
    </div>
  );
};
