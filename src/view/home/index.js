import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import { Affix,Row, Col } from 'antd';
import HomeNav from './HomeNav';
import HomeSecondNav from './HomeSecondNav';
import HomeDetails from './HomeDetails';
import SideNav from './sideNav';
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
            ],
            goodAuthor:[
                {
                    title: '程序员1',
                    desc:'vue.js领域贡献者',
                    userImage:'//user-gold-cdn.xitu.io/2019/2/23/169198b85bfbec1d?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
                    id:'0001'
                },
                {
                    title: '程序员2',
                    desc:'css领域贡献者',
                    userImage:'//mirror-gold-cdn.xitu.io/168e09474c7f9ebe902?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
                    id:'0002'
                },
                {
                    title: '程序员3',
                    desc:'javascript领域贡献者',
                    userImage:'//user-gold-cdn.xitu.io/2019/2/14/168ec55aba592628?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
                    id:'0003'
                }
            ],
            recommendBooks:[
                {
                    id:'book0001',
                    bookImage:'//user-gold-cdn.xitu.io/2018/6/11/163ee322e6d2c827?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1',
                    title:'深入理解 RPC : 基于 Python 自建分布式高并发 RPC 服务',
                    sellNum:100
                },
                {
                    id:'book0002',
                    bookImage:'//user-gold-cdn.xitu.io/2018/7/30/164ea7de07b7f79e?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1',
                    title:'Redis 深度历险：核心原理与应用实践',
                    sellNum:50
                }
            ],
            linkList:[
                {
                    id:'link001',
                    linkImage:'//b-gold-cdn.xitu.io/v3/static/img/repos.28d0802.png',
                    title:'开源库'
                },
                {
                    id:'link002',
                    linkImage:'//b-gold-cdn.xitu.io/v3/static/img/collections.945b9ae.png',
                    title:'收藏集'
                },
                {
                    id:'link003',
                    linkImage:'//b-gold-cdn.xitu.io/v3/static/img/juejin-extension-icon.4b79fb4.png',
                    title:'下载掘金浏览器插件'
                },
                {
                    id:'link004',
                    linkImage:'//b-gold-cdn.xitu.io/v3/static/img/juejin-miner.b78347c.png',
                    title:'前往掘金翻译计划'
                },
                {
                    id:'link005',
                    linkImage:'//b-gold-cdn.xitu.io/v3/static/img/juejin-partner.4dd2d8c.png',
                    title:'商务合作'
                }
            ]
        }
    }
    render() {
        let {match}=this.props;
        const tagType='recommended';
        return (
            <div className="home-container">
                <Affix offsetTop={this.state.top}>
                    <div className="home-nav">
                        <nav>
                            <HomeNav tags={this.state.tags} match={match}/>
                            <a href="/">标签管理</a>
                        </nav>
                    </div>
                </Affix>
                <div className="ct marginTop20">
                    <Row gutter={14}>
                        <Col className="gutter-row" span={18}>
                            <HomeSecondNav />
                            <Route exact path={match.url} render={(props) => <div><HomeDetails tag={tagType} /></div>}/>
                            <Route path={`/timeline/:tagType`} render={(props) => <div><HomeDetails tag={props.match.params.tagType} /></div>}/>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <SideNav goodAuthor={this.state.goodAuthor} recommendBooks={this.state.recommendBooks} linkList={this.state.linkList} />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Home;