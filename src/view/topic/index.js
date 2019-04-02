import React, { Component } from 'react';
import TopicItem from './TopicItem';
import './topic.less';

class Topic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topicList:[
                {
                    id:'000001',
                    topicName:'你怎么看？',
                    topicImage:'//user-gold-cdn.xitu.io/2018/7/12/1648defb2fa34ce1?imageView2/1/w/200/h/200/q/85/format/webp/interlace/1',
                    topicCount:0,
                    followedNum:1805,
                    topicNum:110,
                    isFollowed:true
                },
                {
                    id:'000002',
                    topicName:'今天学到了',
                    topicImage:'//user-gold-cdn.xitu.io/2018/5/27/163a0f36c521fec1?imageView2/1/w/200/h/200/q/85/format/webp/interlace/1',
                    topicCount:0,
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
                }
            ]
        }
    }
    render() {
        return (
            <article className="topic-container">
                <section className='title'>我关注的话题</section>
                <section className='content'>
                    {this.state.topicList.map(item=>{
                        return <TopicItem key={item.id} item={item} />
                    })}
                </section>
            </article>
        );
    }
}

export default Topic;