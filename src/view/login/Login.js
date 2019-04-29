import React, {Component} from 'react';
// import {Redirect} from 'react-router-dom';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { Form,Input,Button,Icon,message } from 'antd';
import { actions as authActions } from "../../reducers/userReducer";

class Login extends Component {
  constructor (props) {
    super (props);
    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false, // 是否重定向到之前的页面
    };
    this.handleChange = this.handleChange.bind (this);
    this.handleSubmit = this.handleSubmit.bind (this);
  }

  // 处理用户名、密码的变化
  handleChange (e) {
    if (e.target.name === 'username') {
      this.setState ({
        username: e.target.value,
      });
    } else if (e.target.name === 'password') {
      this.setState ({
        password: e.target.value,
      });
    } else {
      // do nothing
    }
  }

  // 提交登录表单
  handleSubmit (e) {
    e.preventDefault ();
    const username = this.state.username;
    const password = this.state.password;
    if (username.length === 0 || password.length === 0) {
      alert ('用户名或密码不能为空！');
      return;
    }
    //默认用户名和密码分别为admin和123456
    if(username==='admin' && password==='123456'){
      let userId=username+new Date().getTime();
      this.props.login({username:username,userId:userId});
      this.props.loginSuccess();
    }else{
      message.error('用户名或者密码不正确！');
    }
    // this.setState ({
    //     redirectToReferrer: true,
    // });
  }

  render () {
    // from 保存跳转到登录页前的页面路径，用于在登录成功后重定向到原来页面
    // const {from} = this.props.location.state || {from: {pathname: '/'}};
    // const {redirectToReferrer} = this.state;
    // // 登录成功后，redirectToReferrer为true，使用Redirect组件重定向页面
    // if (redirectToReferrer) {
    //   return <Redirect to={from} />;
    // }
    return (
        <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
                <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    name="password"
                    placeholder="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" style={{width:'100%'}}>
                    登录
                </Button>
            </Form.Item>
        </Form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    // userId: state.userReducer.userId
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    login: authActions.login
  },dispatch);
}

Login=connect(mapStateToProps,mapDispatchToProps)(Login)

export default Login;
