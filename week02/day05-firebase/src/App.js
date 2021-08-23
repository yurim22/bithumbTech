import logo from "./logo.svg";
import "./App.css";
import fs from "./Firebase.js";
import React from 'react';

class App extends React.Component {
  render() {
    console.log("firebase 연동 확인");
    console.log(fs);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          firebase 연결
        </header>
      </div>
    );
  }
}

export default App;
