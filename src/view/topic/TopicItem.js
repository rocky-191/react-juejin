import React from 'react';
import {NavLink} from 'react-router-dom';
import { Badge,Avatar } from 'antd';
import './topic.less'

function TopicItem({item,showCount}){
    const {id,topicName,topicImage,topicCount,followedNum,topicNum,isFollowed}=item;
    return (
        <div className='topicItem'>
            <Badge count={showCount?topicCount:0} overflowCount={999}>
                <Avatar shape="square" size={72} src={topicImage} />
            </Badge>
            <div style={{marginLeft:'15px'}}>
                <div>
                    <NavLink to={`/topic/${id}`}>{topicName}</NavLink>
                </div>
                <div style={{color:'#8a9aa9',marginTop:'5px'}}>
                    <span>{followedNum}关注</span>·
                    <span>{topicNum}沸点</span>
                </div>
                <div className={isFollowed?'hasFollowed':'noFollow'}>
                    {isFollowed?'已关注':'+关注'}
                </div>
            </div>
        </div>
    );
}

export default TopicItem;