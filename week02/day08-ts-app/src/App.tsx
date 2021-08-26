import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyColor from "./components/MyColor";
import MyCounter from "./components/MyCounter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyColor kind="cherry" desc="best" />
        <MyCounter />
      </header>
    </div>
  );
}

export default App;
