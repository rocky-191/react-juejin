import React, { Component } from 'react';
import Header from './header/index'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      notificationCount:1,
      userImage:'//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    }
  }
  render() {
    return (
      <div className="App">
        <Header count={this.state.notificationCount} userImage={this.state.userImage}/>
      </div>
    );
  }
}

export default App;
