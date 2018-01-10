import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Buttons />
      </div>
    );
  }
}
class Buttons extends Component {
  render() {
    return(
     <div className="App-Buttons">
        <h1>My Calculator</h1>
    </div>
  )
  }
}

export default App;
