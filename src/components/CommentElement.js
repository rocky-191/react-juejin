import React, { Component } from 'react';
import { List, Avatar, Icon } from 'antd';
import timeUtil from '@/utils/setTime';

class CommentElement extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const IconText = ({ type, text }) => (
            <span>
                <Icon type={type} style={{ marginRight: 8 }} />
                {text}
            </span>
        );
        return (
            <div>
                <List
                    itemLayout="vertical"
                    size="large"
                    dataSource={this.props.commentList}
                    renderItem={item => (
                    <List.Item
                        key={item.userId}
                        actions={[<span>{timeUtil.getTimeAgo(item.editDate)}</span>,<IconText type="like-o" text={item.starNum} />, <IconText type="message" text={item.commentNum} />]}
                    >
                        <List.Item.Meta
                        avatar={<a href={'/user/'+item.userId}><Avatar src={item.userImage} /></a>}
                        title={<div>{item.authorName}</div>}
                        description={item.userDesc}
                        />
                        {item.commentText}
                    </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default CommentElement;