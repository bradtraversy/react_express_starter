import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Questions from './components/questions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Need Help</h1>
        </header>
        <Questions />
      </div>
    );
  }
}

export default App;
