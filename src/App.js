import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./theme.css";
import { useStoreon } from "storeon/react";


function App() {
  const { login } = useStoreon("login");
  return (
    <div>
      <h1>React Boilerplate App</h1>
    </div>
  );
}

export default App;
