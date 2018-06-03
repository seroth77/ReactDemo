import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("This is my initilizer");

    const movies = [
      {
        id: 0,
        title: "Avengers Inf War",
        overview: "STUFF"
      },
      {
        id: 1,
        title: "Avengers",
        overview: "THINGS"
      }
    ];

    this.state = {
      rows: [
        <p key="1">This is my row0</p>,
        <p key="2">This is my row1</p>,
        <p key="3">This is my row2</p>,
        <p key="4">This is my row3</p>,
        <p key="5">This is my row4</p>
      ]
    };

    var movieRows = [];

    movies.forEach((movie) => {
      console.log(movie.title);
      movieRows.push(<p key={movie.id}>{movie.title}</p>);
    });

    this.state = {rows: movieRows}
  }

  render() {
    return (
      <div className="App">
        
        <div className="container-fluid">
          <div className="Main-Header">
            <div className="row">
              <div className="col-sm-12">
                <span className="fa fa-film"></span>
                <h3>MoviesDB Search</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <input className="test-input" placeholder="Enter search term" />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              {this.state.rows}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
