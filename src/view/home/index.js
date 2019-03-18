import React, { Component } from 'react';
import { Affix } from 'antd';
import HomeNav from './HomeNav';
import HomeDetails from './HomeDetails';
import './home.less';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top: 60,
            tags:[
                {
                    path:'/recommended',
                    text:'推荐',
                    isActived:true,
                },
                {
                    path:'/following',
                    text:'关注',
                    isActived:false,
                }
            ]
        }
    }
    render() {
        return (
            <Affix offsetTop={this.state.top}>
                <div className="home-container">
                    <div className="home-nav">
                        <nav>
                            <HomeNav tags={this.state.tags} />
                            <a href="/">标签管理</a>
                        </nav>
                    </div>
                    <div className="ct">
                        <HomeDetails />
                    </div>
                </div>
            </Affix>
        );
    }
}

export default Home;