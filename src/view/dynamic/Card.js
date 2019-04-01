import React, { Component } from 'react'
import { List, Avatar, Icon,Popover,message } from 'antd';
import timeUtil from '@/utils/setTime';
import './dynamic.less'


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData:[
                {
                    author: `老姚`,
                    avatar: '//user-gold-cdn.xitu.io/2017/7/6/b10fb92f65f744347fea909a8ccabfa0?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
                    description: '《JS正则迷你书》作者',
                    editTime:'1554085646',
                    content: '新的渐变：角向渐变。可以用来实现饼图',
                    likeNum:20,
                    commentNum:30
                },
                {
                    author: `画渣程序猿`,
                    avatar: '//user-gold-cdn.xitu.io/2017/8/6/772d92fd62679fbff7b74186b20f91a6?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
                    description: '饿了么程序员',
                    editTime:'1554088592',
                    content: '听说海淀黄庄地铁站那边有个医院今天可以体验免费植发，不过要求会 C++。原价好几万的项目啊，去了就是赚了（小声逼逼：注意别让太多人知道了，名额有限',
                    likeNum:0,
                    commentNum:0
                }
            ]
        };
    }

    handleReport=(author)=>{
        message.info('你要举报'+author.author);
    }

    //卡片下方点赞、评论、分享事件处理
    handleClick=(tag)=>{
        switch(tag){
            case 'like':
                this.handleLike();
                break;
            case 'comment':
                this.handleComment();
                break;
            case 'share':
                this.handleShare();
                break;
            default:
                return
        }
    }

    //点赞
    handleLike=()=>{
        message.info('点赞');
    }

    //评论
    handleComment=()=>{
        message.info('评论');
    }

    //分享
    handleShare=()=>{
        message.info('分享');
    }

    render() {
        const IconText = ({ type, text,tag }) => (
            <span onClick={this.handleClick.bind(this,tag)}>
                <Icon type={type} style={{ marginRight: 8 }} />
                {text}
            </span>
        );
        const PopoverContent=(id)=>{
            return <p style={{cursor:'pointer'}} onClick={this.handleReport.bind(this,id)}>举报</p>
        }
        return (
            <div>
                <List
                    itemLayout="vertical"
                    size="large"
                    dataSource={this.state.listData}
                    renderItem={item => (
                    <List.Item
                        key={item.author}
                        actions={[<IconText type="like" text={item.likeNum===0?'赞':item.likeNum} tag='like' />,<IconText type="message" text={item.commentNum===0?'评论':item.commentNum} tag='comment' />, <IconText type="share-alt" text="分享" tag='share' />]}
                        extra={<Popover placement="bottom" content={<PopoverContent author={item.author} />} trigger="click">
                                    <span style={{cursor:'pointer'}}>...</span>
                                </Popover>}
                    >
                        <List.Item.Meta
                        // avatar={<Avatar size={45} src={item.avatar} />}
                        avatar={<Popover placement="top" content='个人信息'>
                                    <Avatar size={45} src={item.avatar} />
                                </Popover>}
                        title={<Popover placement="top" content='个人信息'>
                                    <span style={{cursor:'pointer'}}>{item.author}</span>
                                </Popover>}
                        description={<div><span>{item.description}</span><span style={{margin:'0 5px'}}>·</span><span>{timeUtil.getTimeAgo(item.editTime)}</span></div>}
                        />
                        {item.content}
                    </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default Card;