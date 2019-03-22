import React, { Component } from 'react';
import { Avatar,Badge,Icon,Popover } from 'antd';

class ArticleSuspendedPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            overflowCount:99
        }
    }
    render() {
        const articleSuspendedPanel={
            position:'fixed',
            marginLeft:'-100px',
            top: '190px',
            display:'flex',
            flexDirection:'column'
        }
        const badgeSy={
            backgroundColor: '#b2bac2',
            color: '#fff',
            height:'15px',
            lineHeight:'15px',
            boxShadow: '0 0 0 0'
        }

        const avatarSy1={
            marginTop:'10px',
            cursor:'pointer',
            background:'#fff',
            width:'36px',
            height:'36px'
        }

        const panelCircleSy={
            marginBottom: '10px',
            width: '36px',
            height: '36px',
            lineHeight: '36px',
            backgroundColor: '#fff',
            borderRadius: '50%',
            boxShadow: '0 2px 4px 0 rgba(0,0,0,.04)',
            cursor: 'pointer',
            textAlign: 'center'
        }
        const QRCode = require('qrcode.react');
        return (
            <div style={articleSuspendedPanel}>
                <Badge count={this.props.starCount} overflowCount={this.state.overflowCount} style={badgeSy}>
                    <div style={panelCircleSy}>
                        <Icon type="like" theme="filled" style={{color:'#b2bac2'}}/>
                    </div>
                </Badge>
                <Badge count={this.props.commentsCount} overflowCount={this.state.overflowCount} style={badgeSy}>
                    <div style={panelCircleSy}>
                        <Icon type="message" theme="filled" style={{color:'#b2bac2'}}/>
                    </div>
                </Badge>
                <div style={panelCircleSy}>
                    <Icon type="star" theme="filled" style={{color:'#b2bac2'}}/>
                </div>
                <label>分享</label>
                <Avatar style={avatarSy1}>
                    <img alt="" src="//b-gold-cdn.xitu.io/v3/static/img/weibo.2076a57.svg" />
                </Avatar>
                <Avatar style={avatarSy1}>
                    <img alt="" src="//b-gold-cdn.xitu.io/v3/static/img/qq.0834411.svg" />
                </Avatar>
                <Popover content={<QRCode value={window.location.href+'/post/'+this.props.wxShareAddr} />} placement="bottom">
                    <Avatar style={avatarSy1}>
                        <img alt="" src="//b-gold-cdn.xitu.io/v3/static/img/wechat.63e1ce0.svg" />
                    </Avatar>
                </Popover>
            </div>
        );
    }
}

export default ArticleSuspendedPanel;