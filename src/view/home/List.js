import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { List,Statistic,Icon } from 'antd';
import './home.less'

class ArticleList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    showArticleInfo=(id)=>{
        console.log(id);
    }

    render() {
        const {data}=this.props;
        return (
            <div className="article-list">
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                    <List.Item extra={<img width={80} alt="logo" src={item.articleImage} />}>
                        {/* <Link to={`/post/:articleId`}> */}
                            <article onClick={this.showArticleInfo.bind(this,item.id)}>
                                <section className="list-part1">
                                    <ul>
                                        <li className="item post">专栏</li>
                                        <li>{item.author}</li>
                                        <li>{item.time}</li>
                                        <li>{item.tags.map((tag,index)=>{
                                            return <NavLink key={tag} to={`/tag/${tag}`}>{tag}</NavLink>
                                        })}</li>
                                    </ul>
                                </section>
                                <section className="list-part2">
                                    <NavLink to={`/post/:articleId`}>{item.title}</NavLink>
                                </section>
                                <section className="list-part3">
                                    <Statistic value={item.starNum} prefix={<Icon type="like" theme="filled" style={{ fontSize: '14px'}} />} onClick={()=>this.props.editStar(item.id)} />
                                    <Statistic value={item.commentNum} prefix={<Icon type="message" theme="filled" style={{ fontSize: '14px'}} onClick={()=>this.props.lookComment(item.id)} />} />
                                    <Icon type="upload" style={{ fontSize: '16px',marginLeft:'10px',borderRight:'none'}} onClick={()=>this.props.shareArticle(item.id)} />
                                    <Icon type="star" theme="filled" style={{ fontSize: '16px'}} onClick={()=>this.props.collectArticle(item.id)} />
                                </section>
                            </article>
                        {/* </Link> */}
                    </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default ArticleList;