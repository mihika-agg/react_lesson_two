import React, { Component } from 'react';
import logo from './resources/img/logo.svg';
import EWSUsageGrid from './components/EWSUsageGridComponent.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <EWSUsageGrid />
      </div>
    );
  }
}

export default App;
