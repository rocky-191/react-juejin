import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Card,Avatar,List,Button,Icon } from 'antd';
import TopicCard from '@/components/TopicCard/index';
import './dynamic.less'

class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo:{
                topNum:21,
                following:696,
                follower:438
            },
            interestList:[
                {
                    user:'能量员',
                    userImage:'//user-gold-cdn.xitu.io/2018/11/30/1676245f2721946a?imageView2/1/w/90/h/90/q/85/format/webp/interlace/1',
                    desc:'传递正能量，消灭负能量'
                },
                {
                    user:'程序员鼓励喵',
                    userImage:'//user-gold-cdn.xitu.io/2018/7/15/1649e2eb57a98e2a?imageView2/1/w/90/h/90/q/85/format/webp/interlace/1',
                    desc:'猫系程序员鼓励师'
                },
                {
                    user:'芋道源码_以德服人_不服就干',
                    userImage:'//user-gold-cdn.xitu.io/2018/12/23/167db929d9b1d2c8?imageView2/1/w/90/h/90/q/85/format/webp/interlace/1',
                    desc:'对技术走肾，对老婆走心'
                }
            ],
            attentionTopic:[
                {
                    userImage:'//user-gold-cdn.xitu.io/2019/3/15/169804d4b3025572?imageView2/1/w/80/h/80/q/85/format/webp/interlace/1',
                    title:'程序员鼓励师',
                    followNum:'74',
                    hotNews:'73'
                },
                {
                    userImage:'//user-gold-cdn.xitu.io/2018/5/15/1635f8400e159843?imageView2/1/w/80/h/80/q/85/format/webp/interlace/1',
                    title:'一图胜千言',
                    followNum:'3683',
                    hotNews:'2162'
                },
                {
                    userImage:'//user-gold-cdn.xitu.io/2019/1/22/16873e5e371931d5?imageView2/1/w/80/h/80/q/85/format/webp/interlace/1',
                    title:'New 资讯',
                    followNum:'259',
                    hotNews:'595'
                },
                {
                    userImage:'//user-gold-cdn.xitu.io/2018/7/20/164b58a751ad19ad?imageView2/1/w/80/h/80/q/85/format/webp/interlace/1',
                    title:'应用安利',
                    followNum:'2354',
                    hotNews:'701'
                }
            ],
            allTopic:[
                {
                    userImage:'//user-gold-cdn.xitu.io/2018/12/3/167716e00c55522c?imageView2/1/w/80/h/80/q/85/format/webp/interlace/1',
                    title:'年终总结',
                    followNum:'298',
                    hotNews:'63'
                },
                {
                    userImage:'//user-gold-cdn.xitu.io/2018/11/22/1673a95cceee34db?imageView2/1/w/80/h/80/q/85/format/webp/interlace/1',
                    title:'树洞一下',
                    followNum:'303',
                    hotNews:'204'
                },
                {
                    userImage:'//user-gold-cdn.xitu.io/2018/8/8/165180eb6f6c9637?imageView2/1/w/80/h/80/q/85/format/webp/interlace/1',
                    title:'代码写诗',
                    followNum:'1540',
                    hotNews:'131'
                },
                {
                    userImage:'//user-gold-cdn.xitu.io/2019/2/18/168fe22f90f63c06?imageView2/1/w/80/h/80/q/85/format/webp/interlace/1',
                    title:'反馈 & 建议',
                    followNum:'1107',
                    hotNews:'148'
                },
                {
                    userImage:'//user-gold-cdn.xitu.io/2018/3/29/16270f8fac539dbc?imageView2/1/w/80/h/80/q/85/format/webp/interlace/1',
                    title:'掘金相亲',
                    followNum:'4014',
                    hotNews:'276'
                }
            ]
        };
    }

    //换一批
    changeInterestList=()=>{
        //假数据
        let newList=[
            {
                user:'运维咖啡吧',
                userImage:'//user-gold-cdn.xitu.io/2018/12/4/167794e90b7a5135?imageView2/1/w/90/h/90/q/85/format/webp/interlace/1',
                desc:'微信公众号【运维咖啡吧】内容精选'
            },
            {
                user:'科技新闻搬运工',
                userImage:'//user-gold-cdn.xitu.io/2019/2/20/16909dde73092cc0?imageView2/1/w/90/h/90/q/85/format/webp/interlace/1',
                desc:'互联网新鲜事播报员'
            },
            {
                user:'wwwxmu',
                userImage:'//user-gold-cdn.xitu.io/2018/8/30/165880a0e639bc27?imageView2/1/w/90/h/90/q/85/format/webp/interlace/1',
                desc:'后端领域优秀贡献者'
            }
        ]
        this.setState({
            interestList:newList
        })
    }
    render() {
        const { Meta } = Card;
        return (
            <div className='dynamicSide'>
                <Card style={{ width: '100%' }} className='card1'>
                    <Meta
                        avatar={<Avatar size={62} src={this.props.userImage} />}
                        title={this.props.userId}
                        description={this.props.userDesc}
                        />
                    <div>
                        <ul>
                            <li>
                                <p className='liTitle'>沸点</p>
                                <p className='liNum'>{this.state.userInfo.topNum}</p>
                            </li>
                            <li>
                                <p className='liTitle'>关注</p>
                                <p className='liNum'>{this.state.userInfo.following}</p>
                            </li>
                            <li>
                                <p className='liTitle'>关注者</p>
                                <p className='liNum'>{this.state.userInfo.follower}</p>
                            </li>
                        </ul>
                    </div>
                </Card>
                <Card
                    title="你可能感兴趣的人"
                    style={{ width: '100%' ,marginTop:'10px'}}
                    className='card2'
                    >
                    <List
                        itemLayout="horizontal"
                        dataSource={this.state.interestList}
                        renderItem={item => (
                        <List.Item actions={[<Button>关注</Button>]}>
                            <List.Item.Meta
                                avatar={<Avatar size={40} src={item.userImage} />}
                                title={item.user}
                                description={item.desc}
                            />
                        </List.Item>
                        )}
                    />
                    <div className='user-recommend-footer' onClick={this.changeInterestList.bind(this)}>
                        <Icon type="sync" />换一批
                    </div>
                </Card>
                <div style={{marginTop:'10px'}}>
                    <TopicCard title='关注的话题' link='/topics' list={this.state.attentionTopic} />
                </div>
                <div style={{marginTop:'10px'}}>
                    <TopicCard title='更多话题' link='/topics' list={this.state.allTopic} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userImage:state.userReducer.userImage,
        userId:state.userReducer.userId,
        userDesc:state.userReducer.userDesc
    }
}

SideNav=connect(mapStateToProps)(SideNav)

export default SideNav;