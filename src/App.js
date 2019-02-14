import React, { Component } from 'react';
import './App.css';
import { Router, browserHistory } from 'react-router'
// import { BrowserRouter, createBrowserHistory } from 'react-router-dom'
import routes from './router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={browserHistory} routes={routes} />
      </div>
    );
  }
}

export default App;
