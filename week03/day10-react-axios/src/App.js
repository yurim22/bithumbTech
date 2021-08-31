//rce권장, rccp권장, rafce,  rcep

import "./App.css";
import a1 from "./img/a1.png";
import React, { Component } from "react";
import Movies from "./components/Movies";
import "./css/Movies.css";
// axios 관련 package import
import axios from "axios";

export class App extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  handleMovies = async () => {
    // axios.get('url주소')
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
    console.log("handleMovies", this.state.isLoading);
  };
  componentDidMount() {
    console.log("componentDidMount 마운트 완료 후... ");
    this.handleMovies();
  }
  render() {
    const { movies, isLoading } = this.state;

    return (
      <div className="App">
        <img src={a1} alt="풍선" width="400" height="100" /> <p></p>
        App.js 7:08 <p></p>
        <hr></hr>
        {isLoading === false ? (
          <div className="movies">
          {movies.map((mv) => (
            <Movies
              key={mv.id}
              id={mv.id}
              year={mv.year}
              title={mv.title}
              summary={mv.summary}
              poster={mv.large_cover_image}
              genres={mv.genres}
            ></Movies>
            ))}
          </div>
        ) : (
          <>
            <h1 className="App">Loading...</h1>
          </>
        )}
      </div>
    );
  }
} //class END
export default App;

//Button컴포넌트 확인
/*
//rce권장, rccp권장, rafce,  rcep

import './App.css';
import a1 from './img/a1.png';
import MyCounter from './components/MyCounter';
import React, { Component } from 'react'
import Button from './components/Button';


export class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={a1} alt="풍선" width='400' height='100' /> <p></p> 
        App.js 7:08  <p></p>
        <hr></hr>

        <div>
          <Button size="large">BUTTON</Button>
          <Button>BUTTON</Button>
          <Button size="small">BUTTON</Button>
        </div>

        <div>
          <Button size="large" color="gray"> BUTTON</Button>
          <Button color="gray">BUTTON</Button>
          <Button size="small" color="gray">BUTTON</Button>
        </div>

        <div>
          <Button size="large" color="pink"> BUTTON </Button>
          <Button color="pink">BUTTON</Button>
          <Button size="small" color="pink"> BUTTON</Button>
        </div>

        <div>
          <Button size="large" color="blue" outline> BUTTON </Button>
          <Button color="gray" outline> BUTTON </Button>
          <Button size="small" color="pink" outline> BUTTON </Button>
        </div>

        <div>
            <Button size="large" fullWidth> BUTTON </Button>
            <Button size="large" fullWidth color="gray"> BUTTON </Button>
            <Button size="large" fullWidth color="pink">  BUTTON  </Button>
        </div>

      </div>
    )
  }
}

export default App;


*/
