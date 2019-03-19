import React, { Component } from 'react';
import {Route} from 'react-router-dom'
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
                    path:'recommended',
                    text:'推荐'
                },
                {
                    path:'following',
                    text:'关注'
                }
            ]
        }
    }
    render() {
        let {match}=this.props;
        const tagType='recommended';
        return (
            <Affix offsetTop={this.state.top}>
                <div className="home-container">
                    <div className="home-nav">
                        <nav>
                            <HomeNav tags={this.state.tags} match={match}/>
                            <a href="/">标签管理</a>
                        </nav>
                    </div>
                    <div className="ct">
                        <Route exact path={match.url} render={(props) => <div><HomeDetails tag={tagType} /></div>}/>
                        <Route path={`/timeline/:tagType`} render={(props) => <div><HomeDetails tag={props.match.params.tagType} /></div>}/>
                    </div>
                </div>
            </Affix>
        );
    }
}

export default Home;