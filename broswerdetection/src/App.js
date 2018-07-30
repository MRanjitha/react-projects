import React, { Component } from 'react';
import BrowserDetection from 'react-browser-detection';
import logo from './logo.svg';
import './App.css';

const browserHandler = {
  chrome: () => <div>Chrome is fantastic!</div>,
  googlebot: () => <div>Hi GoogleBot!</div>,
  default: (browser) => <div>Hi {browser}!</div>,
};

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <BrowserDetection>
        { browserHandler }
      </BrowserDetection>
      </div>
    );
  }
}

export default App;
