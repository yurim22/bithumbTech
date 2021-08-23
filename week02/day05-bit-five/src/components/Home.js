import './App.css';
import hydran  from './img/hydran.png'
import React from 'react'; 


class Home  extends React.Component {
  render(){
  
    return (
      <div  className="App">
         <img src={hydran} alt='수선화' width='500' height='150' /> <p></p>
         Home.js <p></p>
      </div>
    );
  }
}

export default Home;
