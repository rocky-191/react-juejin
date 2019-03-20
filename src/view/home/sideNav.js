import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Card,List, Avatar } from 'antd';

class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <div>
                <Card
                    title="掘金优秀作者"
                    style={{ width: '100%' }}
                    hoverable={'true'}
                    actions={[<NavLink to='/recommendation/authors/recommended' style={{color:'#007fff'}}>查看更多></NavLink>]}
                    >
                    <List
                        itemLayout="horizontal"
                        dataSource={this.props.goodAuthor}
                        renderItem={item => (
                        <List.Item onClick={()=>window.location.href='/user/'+item.id}>
                            <List.Item.Meta
                            avatar={<Avatar size={46} src={item.userImage} />}
                            title={item.title}
                            description={<div className="overflow-ellipsis">{item.desc}</div>}
                            />
                        </List.Item>
                        )}
                    />
                </Card>
                <Card
                    title="你可能感兴趣的小册"
                    style={{ width: '100%',marginTop:'20px' }}
                    hoverable={'true'}
                    >
                    <List
                        itemLayout="horizontal"
                        dataSource={this.props.recommendBooks}
                        className="bookCard"
                        renderItem={item => (
                        <List.Item onClick={()=>window.location.href='/book/'+item.id}>
                            <List.Item.Meta
                            avatar={<img alt='' src={item.bookImage} />}
                            title={item.title}
                            description={<p className="book-desc"><span>{item.sellNum+'人已购买'}</span><span className="try-read">试读</span></p>}
                            />
                        </List.Item>
                        )}
                    />
                </Card>
                <Card style={{ width: '100%',marginTop:'20px' }} hoverable='true' className="download-card" bodyStyle={{padding:'15px'}}>
                    <NavLink to='/app'>
                        <img alt='qrcode' src='//b-gold-cdn.xitu.io/v3/static/img/timeline.e011f09.png' />
                        <div>
                            <div className="headline">下载掘金客户端</div>
                            <div className="desc">一个帮助开发者成长的社区</div>
                        </div>
                    </NavLink>
                </Card>
                <Card
                    style={{ width: '100%',marginTop:'20px' }}
                    hoverable={'true'}
                    >
                    <List
                        itemLayout="horizontal"
                        dataSource={this.props.linkList}
                        className="linkCard"
                        renderItem={item => (
                        <List.Item onClick={()=>window.location.href='/repos'}>
                            <List.Item.Meta
                            avatar={<img alt='' src={item.linkImage} />}
                            title={item.title}
                            />
                        </List.Item>
                        )}
                    />
                </Card>
            </div>
        );
    }
}

export default SideNav;