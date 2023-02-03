import { useState } from "react";
import "./App.css";

import { Header } from "./Components/Header";
import { Signin } from "./Components/Signin";
import { Routes, Route } from "react-router-dom";
import { Welcome } from "./Components/Welcome";

function App() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [isLogin, setIsLogin] = useState();

  return (
    <div>
      {/* <Header />*/}
      <Routes>
        <Route
          path="/"
          element={
            <Signin
              setName={setName}
              name={name}
              password={password}
              setPassword={setPassword}
              setIsLogin={setIsLogin}
              isLogin={isLogin}
            />
          }
        />
        <Route
          path="/welcome"
          element={
            <Welcome name={name} setIsLogin={setIsLogin} isLogin={isLogin} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
