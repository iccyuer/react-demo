import React, { Component } from 'react';
import { Link } from 'react-router'
import styles from './index.scss'

class App extends Component {
  click = () => {
    console.log(styles);
  }
  render() {
    return (
      <div className="root">
        <div className="nav-item">
          <Link to="/home">首页</Link>
        </div>
        <div className="nav-item">
          <Link to="/discover">发现</Link>
        </div>
        <div className="nav-item">
          <Link to="/me">我的</Link>
        </div>
      </div>
    );
  }
}

export default App;
