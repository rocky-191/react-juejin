import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import appReducer from './reducers/index.js';
import Header from './view/header/index'
import Main from './view/main/index';
import './App.css';

// 使用合并后的那个Reducer
const store = createStore(appReducer);

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      //notificationCount:1,
      userImage:'//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'//从全局获取
    }
  }
  componentWillMount(){
    //修改通知count
    //store.dispatch({type:'CHANGE_COUNT',notificationCount:9});
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Main />
        </div>
      </Provider>
    );
  }
}

export default App;
