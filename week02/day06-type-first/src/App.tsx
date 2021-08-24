import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyGame from './components/MyGame';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <MyGame title="메이플스토리" />
        처음으로 만드는 typscript
      </header>
    </div>
  );
}

export default App;
