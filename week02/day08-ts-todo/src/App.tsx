import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <TodoList />
    </div>
  );
}

export default App;
