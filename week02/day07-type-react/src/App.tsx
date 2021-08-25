import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyColor from "./components/MyColor";
import MyCount from "./components/MyCount";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <img src={logo} alt="수선화" width="400" height="150" />
        <MyColor />
        <MyCount />
      </div>
    );
  }
}

export default App;

