import React, { Component } from 'react'
import { Input,Button,message,Popover } from 'antd';
import TopicList from './TopicList';

class PublishDynamic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabledBtn:true,
            inputValue:'',
            selectedTopic:''
        };
    }
    handlePressEnter=()=>{
        message.error('请输入沸点内容');
    }

    handleBtn=(tag)=>{
        console.log(tag);
        switch(tag){
            case 'exp':
                //this.handleExp();
                message.info('表情组件待完善！');
                break;
            case 'pic':
                //this.handlePic();
                message.info('上传图片！');
                break;
            case 'link':
                //this.handleLink();
                message.info('添加链接！');
                break;
            case 'topic':
                //this.handleTopic();
                break;
            default:
                return
        }
    }
    handleTopic=(val)=>{
        this.setState({
            selectedTopic:val
        })
    }

    //输入框内容发生变化触发
    handelInputChange=(e)=>{
        console.log(e.target.value);
        if(e.target.value.trim()!==''){
            this.setState({
                disabledBtn:false,
                inputValue:e.target.value
            })
        }else{
            this.setState({
                disabledBtn:true
            })
        }
    }
    
    //回车按钮触发事件
    handlePressEnter=()=>{
        if(this.state.inputValue!==''){
            console.log('发布沸点')
        }else{
            message.error('请输入沸点内容');
        }
    }

    render() {
        const { TextArea } = Input;
        const sy1={color:'#027fff',cursor: 'pointer',display:'flex',alignItems:'center'};
        const sy2={display:'flex',alignItems:'center',marginRight:'10px'};
        return (
            <div style={{background:'#fff',padding:'15px',position:'relative'}}>
                <TextArea placeholder="告诉你个小秘密，发沸点时添加话题会被更多小伙伴看见呦~" style={{paddingBottom:'30px'}} autosize={{ minRows: 3}} onChange={this.handelInputChange.bind(this)}/>
                {this.state.selectedTopic!==''?<span style={{position:'absolute',bottom:'60px',left:'28px',padding:'0 12px',border:'1px solid #007fff',userSelect:'none',height:'22px',borderRadius:'14px',color:'#007fff'}}>{this.state.selectedTopic}</span>:''}
                <div style={{marginTop:'5px',display:'flex',justifyContent:'space-between'}}>
                    <ul style={sy1}>
                        <li style={sy2} onClick={this.handleBtn.bind(this,'exp')}>
                            <img alt='' src='//b-gold-cdn.xitu.io/v3/static/img/emoji.5594dbb.svg' />表情
                        </li>
                        <li style={sy2} onClick={this.handleBtn.bind(this,'pic')}>
                            <img alt='' src='//b-gold-cdn.xitu.io/v3/static/img/active_file.d265f4e.svg' />图片
                        </li>
                        <li style={sy2} onClick={this.handleBtn.bind(this,'link')}>
                            <img alt='' src='//b-gold-cdn.xitu.io/v3/static/img/active_link.b1a6832.svg' />链接
                        </li>
                        <Popover placement="bottom" content={<TopicList handleTopic={this.handleTopic.bind(this)} />} trigger="click">
                            <li style={sy2} onClick={this.handleBtn.bind(this,'topic')}>
                                <img alt='' src='//b-gold-cdn.xitu.io/v3/static/img/topic.6a87bb7.svg' />话题
                            </li>
                        </Popover>
                    </ul>
                    <Button type="primary" disabled={this.state.disabledBtn} onClick={this.handlePressEnter.bind(this)}>发布</Button>
                </div>
            </div>
        );
    }
}

export default PublishDynamic;