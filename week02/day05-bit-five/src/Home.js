import './App.css';
// import hydran  from './img/hydran.png'
import logo from "./logo.svg";
import React from 'react'; 


class Home  extends React.Component {
  render(){
  
    return (
      <div  className="App">
         <img src={logo} alt='수선화' width='500' height='150' /> <p></p>
         Home.js <p></p>
      </div>
    );
  }
}

export default Home;
