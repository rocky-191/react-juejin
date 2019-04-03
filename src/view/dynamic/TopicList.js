import React, { Component } from 'react';
import { Input,List, Avatar } from 'antd';

class TopicList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topicListData:[
                {
                    img:'//user-gold-cdn.xitu.io/2019/3/15/169804d4b3025572?imageView2/1/w/300/h/300/q/85/format/webp/interlace/1',
                    title: '程序员鼓励师',
                    followers:'56',
                    num:'60'
                },
                {
                    img:'//user-gold-cdn.xitu.io/2019/1/22/16873e5e371931d5?imageView2/1/w/300/h/300/q/85/format/webp/interlace/1',
                    title: 'News 资讯',
                    followers:'56',
                    num:'60'
                },
                {
                    img:'//user-gold-cdn.xitu.io/2018/12/29/167f895de55ecd98?imageView2/1/w/300/h/300/q/85/format/webp/interlace/1',
                    title: '求职中',
                    followers:'362',
                    num:'50'
                },
                {
                    img:'//user-gold-cdn.xitu.io/2018/12/21/167d075b19a7367a?imageView2/1/w/300/h/300/q/85/format/webp/interlace/1',
                    title: '好文推荐',
                    followers:'56',
                    num:'60'
                },
                {
                    img:'//user-gold-cdn.xitu.io/2018/12/21/167cee49ac013efa?imageView2/1/w/300/h/300/q/85/format/webp/interlace/1',
                    title: '进击的React',
                    followers:'492',
                    num:'25'
                },
                {
                    img:'//user-gold-cdn.xitu.io/2018/12/12/167a0256fa93abb0?imageView2/1/w/300/h/300/q/85/format/webp/interlace/1',
                    title: '上班摸鱼',
                    followers:'373',
                    num:'309'
                },
                {
                    img:'//user-gold-cdn.xitu.io/2018/12/11/1679b81bcaa2c98d?imageView2/1/w/300/h/300/q/85/format/webp/interlace/1',
                    title: '掘金前端小组',
                    followers:'749',
                    num:'61'
                },
                {
                    img:'//user-gold-cdn.xitu.io/2018/12/11/1679b3f7f3194335?imageView2/1/w/300/h/300/q/85/format/webp/interlace/1',
                    title: '我 & 掘金',
                    followers:'749',
                    num:'61'
                },
                {
                    img:'//user-gold-cdn.xitu.io/2018/12/10/1679781887d8aa3b?imageView2/1/w/300/h/300/q/85/format/webp/interlace/1',
                    title: '划个知识点',
                    followers:'421',
                    num:'242'
                },
                {
                    img:'//user-gold-cdn.xitu.io/2018/12/7/16786baaed4306a7?imageView2/1/w/300/h/300/q/85/format/webp/interlace/1',
                    title: '优秀开源推荐',
                    followers:'1002',
                    num:'278'
                },
            ],
            storeListData:[]
        };
    }

    componentDidMount(){
        const store=[...this.state.topicListData];
        this.setState({
            storeListData:[...store]
        })
    }

    handleClick=(val)=>{
        this.props.handleTopic(val);
    }

    handleSearch=(value)=>{
        const list=[...this.state.storeListData];
        if(value!==''){
            const searchList=list.filter(item=>item.title.indexOf(value)>-1);
            this.setState({
                topicListData:searchList
            })
        }else{
            this.setState({
                topicListData:list
            })
        }
    }
    render() {
        const Search = Input.Search;
        return (
            <div style={{background:'#fff',padding:'10px'}}>
                <Search
                    placeholder="搜索话题"
                    onSearch={value => this.handleSearch(value)}
                    style={{ width: '100%' }}
                />
                <List
                    itemLayout="horizontal"
                    dataSource={this.state.topicListData}
                    style={{height:'300px',overflow:'auto'}}
                    renderItem={item => (
                    <List.Item style={{cursor:'pointer'}} onClick={this.handleClick.bind(this,item.title)}>
                        <List.Item.Meta
                        avatar={<Avatar size={42} shape="square" src={item.img} />}
                        title={item.title}
                        description={<div>{item.followers}关注 {item.num}沸点</div>}
                        />
                    </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default TopicList;