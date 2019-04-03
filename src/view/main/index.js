import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Spin } from 'antd';
// import Home from '../home/index';//首页
// import Post from '../post/index';//文章详情
// import Dynamic from '../dynamic/index';//动态
// import Topic from '../topic/index';//话题
// import Brochure from '../brochure/index';//小册
// import Activity from '../activity/index';//活动

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        // React 16.6 or higher
        // 使用Suspense做Code-Splitting
        //https://github.com/rocky-191/react-juejin/issues/1
        const withSuspense = (Component) => {
            return (props) => (
                <Suspense fallback={<Spin />}>
                    <Component {...props} />
                </Suspense>
            )
        }
        const Home = withSuspense(lazy(() => import("../home/index")))
        const Post = withSuspense(lazy(() => import("../post/index")))
        const Dynamic = withSuspense(lazy(() => import("../dynamic/index")))
        const Topic = withSuspense(lazy(() => import("../topic/index")))
        const Brochure = withSuspense(lazy(() => import("../brochure/index")))
        const Activity = withSuspense(lazy(() => import("../activity/index")))
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/timeline' component={Home}/>
                <Route path='/post/:articleId' component={Post}/>
                <Route path='/dynamic' component={Dynamic}/>
                <Route path='/topic' component={Topic}/>
                <Route path='/books' component={Brochure}/>
                <Route path='/activity' component={Activity}/>
            </Switch>
        );
    }
}

export default Main;