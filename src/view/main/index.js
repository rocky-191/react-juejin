import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/index';//首页
import Details from '../home/HomeDetails';
import Dynamic from '../dynamic/index';//动态
import Topic from '../topic/index';//话题
import Brouchure from '../brochure/index';//小册
import Activity from '../activity/index';//活动

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/timeline/:tagType' component={Details}></Route>
                    <Route path='/dynamic' component={Dynamic}/>
                    <Route path='/topic' component={Topic}/>
                    <Route path='/brochure' component={Brouchure}/>
                    <Route path='/activity' component={Activity}/>
                </Switch>
            </div>
        );
    }
}

export default Main;