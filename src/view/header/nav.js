import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './header.less'
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navs:[
                {
                    text:'首页',
                    isActived:true,
                    path:'/'
                },
                {
                    text:'动态',
                    isActived:false,
                    path:'/dynamic'
                },
                {
                    text:'话题',
                    isActived:false,
                    path:'/topic'
                },
                {
                    text:'小册',
                    isActived:false,
                    path:'/books'
                },
                {
                    text:'活动',
                    isActived:false,
                    path:'/activity'
                }
            ]
        }
    }

    handelClick=(i)=>{
        //console.log(i)
        let navs=this.state.navs;
        navs.forEach((item,index)=>{
            if(index === i){
                item.isActived=true;
            }else{
                item.isActived=false;
            }
        });
        this.setState({
            navs:navs
        })
    }
    render() {
        return (
            <ul>
                {this.state.navs.map((item,index)=>{
                    return <li key={item.path} className={item.isActived?'activeLi':''} onClick={this.handelClick.bind(this,index)}>
                                <Link to={item.path}>{item.text}</Link>
                            </li>
                })}
            </ul>
        );
    }
}

export default Nav;