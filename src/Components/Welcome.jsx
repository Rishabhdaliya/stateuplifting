import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const Welcome = ({ isLogin, setIsLogin, name }) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    alert("successfully logged out");
    setIsLogin(false);
  };

  if (!isLogin) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      Welcome to home page {name}
      <button onClick={logoutHandler}>logout</button>
    </div>
  );
};
