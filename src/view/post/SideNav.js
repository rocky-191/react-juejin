import React, { Component } from 'react';
import { Card,List, Avatar,Icon,Affix } from 'antd';
import InterestedBrochure from '@/components/InterestedBrochure/index';
import DownloadApp from '@/components/DownloadApp/index';
import Catalogue from '@/components/Catalogue/index';

class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recommendBooks:[//可根据登录用户id分析给出对应推荐小册内容
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
            top: 60
        }
    }
    render() {
        return (
            <div>
                <Card
                    title="关于作者"
                    style={{ width: '100%' }}
                    hoverable={'true'}
                    bodyStyle={{padding:'0 16px'}}
                    >
                    <List
                        itemLayout="vertical"
                        dataSource={this.props.author}
                        renderItem={item => (
                        <List.Item onClick={()=>window.location.href='/user/'+item.id}>
                            <List.Item.Meta
                            avatar={<Avatar size={46} src={item.authorImage} />}
                            title={item.author}
                            />
                            {item.isGroup?<div>
                                <Avatar style={{ backgroundColor: '#e1efff',color:'#7bb9ff' }} icon="user" />
                                <label style={{color:'#000',marginLeft:'10px',fontSize:'16px'}}>联合编辑</label>
                            </div>:''}
                            <div style={{marginTop:'10px'}}>
                                <Avatar style={{ backgroundColor: '#e1efff' }}>
                                    <Icon type="like" theme="filled" style={{color:'#7bb9ff'}} />
                                </Avatar>
                                <label style={{color:'#000',marginLeft:'10px',fontSize:'16px'}}>获得赞数{item.allStarNum}</label>
                            </div>
                            <div style={{marginTop:'10px'}}>
                                <Avatar style={{ backgroundColor: '#e1efff' }}>
                                    <Icon type="eye" theme="filled" style={{color:'#7bb9ff'}} />
                                </Avatar>
                                <label style={{color:'#000',marginLeft:'10px',fontSize:'16px'}}>获得阅读数{item.allReadNum<99999?item.allReadNum:'99999+'}</label>
                            </div>
                        </List.Item>
                        )}
                    />
                </Card>
                <InterestedBrochure recommendBooks={this.state.recommendBooks} />
                <DownloadApp />
                <Card
                    style={{ width: '100%',marginTop:'20px' }}
                    hoverable={'true'}
                    bodyStyle={{padding:'0'}}
                >
                    <img alt='' src='//b-gold-cdn.xitu.io/v3/static/img/backend.ba44b94.png' style={{height:'200px',width:'100%'}} />
                </Card>
                <Card
                    title="相关文章"
                    style={{ width: '100%',marginTop:'20px'}}
                    hoverable={'true'}
                    bodyStyle={{padding:'0 16px'}}
                    >
                    <List
                        itemLayout="vertical"
                        dataSource={this.props.relationArticles}
                        split={false}
                        renderItem={item => (
                        <List.Item onClick={()=>window.location.href='/post/'+item.id}>
                            <div style={{color:'#333',fontSize:'16px'}}>{item.title}</div>
                            <div style={{marginTop:'10px',color:'#b2bac2',fontSize:'12px'}}>
                                <Icon type="like" theme="filled" style={{marginRight:'3px'}} />{item.starNum}
                                <Icon type="message" theme="filled" style={{marginLeft:'15px',marginRight:'3px'}} />{item.commentNum}
                            </div>
                        </List.Item>)}
                    />
                </Card>
                <Affix offsetTop={this.state.top}>
                    <p style={{marginTop:'10px',color:'#000',fontSize:'16px'}}>目录</p>
                    <Catalogue data={this.props.articleCatalogue} />
                </Affix>
            </div>
        );
    }
}

export default SideNav;