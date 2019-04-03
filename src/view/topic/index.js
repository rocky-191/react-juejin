import React, { Component } from 'react';
import TopicItem from './TopicItem';
import './topic.less';

class Topic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allTopicList:[
                {
                    id:'000001',
                    topicName:'你怎么看？',
                    topicImage:'//user-gold-cdn.xitu.io/2018/7/12/1648defb2fa34ce1?imageView2/1/w/200/h/200/q/85/format/webp/interlace/1',
                    topicCount:10,
                    followedNum:1805,
                    topicNum:110,
                    isFollowed:false
                },
                {
                    id:'000002',
                    topicName:'今天学到了',
                    topicImage:'//user-gold-cdn.xitu.io/2018/5/27/163a0f36c521fec1?imageView2/1/w/200/h/200/q/85/format/webp/interlace/1',
                    topicCount:20,
                    followedNum:3726,
                    topicNum:1990,
                    isFollowed:true
                },
                {
                    id:'000003',
                    topicName:'一图胜千言',
                    topicImage:'//user-gold-cdn.xitu.io/2018/5/15/1635f8400e159843?imageView2/1/w/200/h/200/q/85/format/webp/interlace/1',
                    topicCount:20,
                    followedNum:3692,
                    topicNum:2173,
                    isFollowed:true
                },
                {
                    id:'000004',
                    topicName:'开发工具推荐',
                    topicImage:'//user-gold-cdn.xitu.io/2018/3/28/1626c0ac4544df09?imageView2/1/w/200/h/200/q/85/format/webp/interlace/1',
                    topicCount:10,
                    followedNum:6052,
                    topicNum:769,
                    isFollowed:true
                },
                {
                    id:'000005',
                    topicName:'应用安利',
                    topicImage:'//user-gold-cdn.xitu.io/2018/7/20/164b58a751ad19ad?imageView2/1/w/200/h/200/q/85/format/webp/interlace/1',
                    topicCount:10,
                    followedNum:2366,
                    topicNum:707,
                    isFollowed:true
                },
                {
                    id:'000006',
                    topicName:'掘金相亲',
                    topicImage:'//user-gold-cdn.xitu.io/2018/3/29/16270f8fac539dbc?imageView2/1/w/200/h/200/q/85/format/webp/interlace/1',
                    topicCount:10,
                    followedNum:4016,
                    topicNum:769,
                    isFollowed:false
                }
            ],
            followedTopic:[]
        }
    }

    componentDidMount(){
        const list=[...this.state.allTopicList];
        const followedTopicList=list.filter(item=>item.isFollowed);
        this.setState({
            followedTopic:[...followedTopicList]
        })
    }
    render() {
        return (
            <article className="topic-container">
                <section className='title'>我关注的话题</section>
                <section className='content'>
                    {this.state.followedTopic.map(item=>{
                        return <TopicItem key={item.id} item={item} showCount={true} />
                    })}
                </section>
                <section className='title'>全部话题</section>
                <section className='content'>
                    {this.state.allTopicList.map(item=>{
                        return <TopicItem key={item.id} item={item} showCount={false} />
                    })}
                </section>
            </article>
        );
    }
}

export default Topic;