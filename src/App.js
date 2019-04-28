import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Modal } from 'antd';
import appReducer from './reducers/index.js';
import Header from './view/header/index'
import Main from './view/main/index';
import Login from './view/login/Login';
import './App.css';

// 使用合并后的那个Reducer
const store = createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      //notificationCount:1,
      //userImage:'//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'//从全局获取
      visible: false,
    }
  }
  componentWillMount(){
    //修改通知count
    //store.dispatch({type:'CHANGE_COUNT',notificationCount:9});
  }

  handlelogin=()=>{
    this.setState({ visible: true });
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  render() {
    const { visible } = this.state;
    return (
      <Provider store={store}>
        <div className="App">
          <Header handlelogin={this.handlelogin} />
          <Main />
          <Modal
          visible={visible}
          title="登录"
          onCancel={this.handleCancel}
          footer={null}
        >
          <Login loginSuccess={this.handleCancel} />
        </Modal>
        </div>
      </Provider>
    );
  }
}

export default App;
