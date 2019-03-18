import React, { Component } from 'react';
import './header.less'
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navs:[
                {
                    text:'首页',
                    isActived:true,
                    path:'1'
                },
                {
                    text:'动态',
                    isActived:false,
                    path:'2'
                },
                {
                    text:'话题',
                    isActived:false,
                    path:'3'
                },
                {
                    text:'小册',
                    isActived:false,
                    path:'4'
                },
                {
                    text:'活动',
                    isActived:false,
                    path:'5'
                }
            ]
        }
    }

    handelClick=(i)=>{
        console.log(i)
    }
    render() {
        return (
            <ul>
                {this.state.navs.map((item,index)=>{
                    return <li key={item.path} className={item.isActived?'activeLi':''} onClick={this.handelClick.bind(this,index)}>{item.text}</li>
                })}
            </ul>
        );
    }
}

export default Nav;