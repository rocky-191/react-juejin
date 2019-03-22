import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col,List, Avatar } from 'antd';
import ArticleSuspendedPanel from '@/components/ArticleSuspendedPanel';
import CommentList from '@/components/Comment';
import CommentElement from '@/components/CommentElement';
import RelationArticleList from '../home/List';
import SideNav from './SideNav';
import './post.less';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //实际中该部分数据需要从数据库中获取
            articleInfo:{
                starCount:'10',
                commentsCount:'5',
                articleList:[{
                    authorImage:'//user-gold-cdn.xitu.io/2017/12/7/16030548a8f02132?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
                    author:'rocky191',
                    editDate:'2019年03月20日',
                    readNum:'1853',
                    isFocus:true,
                    isGroup:true,
                    allStarNum:100,
                    allReadNum:2000
                }],
                articleText:'最近正在学习react，就想着能不能用react做一个项目，平时浏览掘金，就拿掘金练手吧！'
            },
            commentList:[
                {
                    userId:'0001',
                    starNum:20,
                    commentNum:2,
                    userImage:'//user-gold-cdn.xitu.io/2018/6/12/163efcdca9ddcc90?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
                    authorName:'灵魂摆渡人',
                    userDesc:'前端',
                    commentText:'手动赞',
                    editDate:1,
                    reply:[
                        {
                            userId:'0004',
                            starNum:10,
                            commentNum:5,
                            userImage:'//mirror-gold-cdn.xitu.io/168e093aa99c9c4ad10?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
                            authorName:'melody_future',
                            userDesc:'',
                            commentText:'666',
                            editDate:2
                        }
                    ]
                },
                {
                    userId:'0002',
                    starNum:10,
                    commentNum:5,
                    userImage:'//user-gold-cdn.xitu.io/2019/2/14/168e79b54e15499e?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
                    authorName:'iceytea',
                    userDesc:'Web前端工程师 @ 能力有限',
                    commentText:'内容很棒，感谢作者。',
                    editDate:2
                },
                {
                    userId:'0003',
                    starNum:5,
                    commentNum:2,
                    userImage:'//mirror-gold-cdn.xitu.io/168e0862b6ffe7ed02e?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
                    authorName:'xuzhanhh',
                    userDesc:'前端搬砖仔jd',
                    commentText:'内容很棒，感谢作者。',
                    editDate:3
                }
            ],
            relateList:[
                {
                    id:'00001',
                    author:'Tom大叔',
                    time:'两小时前',
                    tags:['css','webpack'],
                    title:'前端构建秘籍',
                    articleImage:'//user-gold-cdn.xitu.io/2019/3/19/169944ad67bc2e6c?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1',
                    starNum:'1',//点赞数
                    commentNum:'1',//评论数
                    articleType:'1',//1代表文章类型为专栏，2代表文章类型为小册
                },
                {
                    id:'00002',
                    author:'js爱好者',
                    time:'两小时前',
                    tags:['css','webpack'],
                    title:'Vue初探',
                    articleImage:'//gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
                    starNum:'1',//点赞数
                    commentNum:'1',//评论数
                    articleType:'1'
                }
            ],
            relationArticles:[
                {
                    id:'0001',
                    title:'vue面试题集合',
                    starNum:'10',
                    commentNum:'20'
                },
                {
                    id:'0002',
                    title:'react资料整理',
                    starNum:'100',
                    commentNum:'30'
                }
            ],
            articleCatalogue:[
                {
                    text:'题记',
                    children:[
                        {
                            text:'标题1'
                        },
                        {
                            text:'标题2'
                        }
                    ]
                },
                {
                    text:'安装',
                    children:[]
                },
                {
                    text:'使用步骤',
                    children:[]
                }
            ]
        }
    }

    componentDidMount(){
        const {match}=this.props;
        //初始渲染应该根据文章作者id和文章id获取实际内容
        //用户id在初始登录系统的时候存入了全局store
        console.log(`文章id：${match.params.articleId},用户id：${this.props.userId}`);
    }

    submitComment=(val)=>{
        console.log(`评论信息:`+val);
        let newObj={
            userId:this.props.userId,
            starNum:0,
            commentNum:0,
            userImage:this.props.userImage,
            authorName:this.props.userName,
            userDesc:this.userDesc,
            commentText:val,
            editDate:0
        }
        this.setState({
            commentList:[...this.state.commentList,newObj]
        })
    }

    //点赞
    editStar=(id)=>{
        console.log('点赞',id);
    }

    //评论
    lookComment=(id)=>{
        console.log('评论',id);
        window.location.href = `/post/:${id}`;  //window.location.href跳转
    }

    //收藏
    collectArticle=(id)=>{
        console.log('收藏',id);
    }

    render() {
        const {match}=this.props;
        return (
            <div className="ct marginTop20 position-rel">
                <ArticleSuspendedPanel starCount={this.state.articleInfo.starCount} commentsCount={this.state.articleInfo.commentsCount} wxShareAddr={match.params.articleId} />
                <Row gutter={14}>
                    <Col className="gutter-row" span={18}>
                        <div className="article-info">
                            <List
                                itemLayout="horizontal"
                                dataSource={this.state.articleInfo.articleList}
                                renderItem={item => (
                                <List.Item actions={[item.isFocus?<button className='focusedBtn'>已关注</button>:<button className='focusBtn'>关注</button>]}>
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.authorImage} />}
                                        title={item.author}
                                        description={<div><span>{item.editDate}</span><span style={{marginLeft:'10px'}}>阅读{item.readNum}</span></div>}
                                    />
                                </List.Item>
                                )}
                            />
                            <article>
                                <section>{this.state.articleInfo.articleText}</section>
                                <CommentList userImage={this.props.userImage} submitComment={this.submitComment.bind(this)} />
                                <CommentElement commentList={this.state.commentList} />
                            </article>
                        </div>
                        <div style={{background:'#fff',marginTop:'20px'}}>
                            <header style={{height:'52px',lineHeight:'52px',borderBottom:'1px solid rgba(178,186,194,.15)',color:'#909090',fontWeight:'600',padding:'0 20px',fontSize:'16px'}}>相关推荐</header>
                            <RelationArticleList data={this.state.relateList} editStar={this.editStar.bind(this)} lookComment={this.lookComment.bind(this)} collectArticle={this.collectArticle.bind(this)} />
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <SideNav author={this.state.articleInfo.articleList} relationArticles={this.state.relationArticles} articleCatalogue={this.state.articleCatalogue}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userId:state.userReducer.userId,
        userImage:state.userReducer.userImage,
        userName:state.userReducer.userName,
        userDesc:state.userReducer.userDesc
    }
}

Post=connect(mapStateToProps)(Post)

export default Post;