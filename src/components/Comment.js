import React, { Component } from 'react'
import { Avatar,Input,Button,message } from 'antd';

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:'',//输入框内容
            showIconAndBtn:false
        }
    }

    handleFocus=()=>{
        this.setState({
            showIconAndBtn:true
        })
    }

    handleChange=(e)=>{
        // console.log(e.target.value);
        this.setState({
            value:e.target.value
        });
    }

    //评论
    handlePressEnter=()=>{
        if(this.state.value!==''){
            this.props.submitComment(this.state.value);
            this.setState({
                value:'',
                showIconAndBtn:false
            })
        }else{
            message.warning('还未填写评论哦！');
        }
    }

    render() {
        const info = () => {
            message.info('表情组件待完善！');
        };
        return (
            <article>
                <section style={{textAlign:'center',color:'#8a9aa9',fontSize:'16px',margin:'20px 0 10px 0'}}>评论</section>
                <section style={{display:'flex',background:'#fafbfc',borderRadius:'3px',margin:'20px 0',padding:'10px 15px'}}>
                    <Avatar src={this.props.userImage} />
                    <div style={{marginLeft:'10px',flex:'1'}}>
                        <div>
                            <Input value={this.state.value} placeholder="输入评论..." onFocus={this.handleFocus.bind(this)} onChange={this.handleChange.bind(this)} onPressEnter={this.handlePressEnter.bind(this)}/>
                        </div>
                        {
                            this.state.showIconAndBtn?
                                <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                                    <span style={{color:'#027fff',cursor: 'pointer',display:'flex',alignItems:'center'}} onClick={info}>
                                        <img alt='' src='//b-gold-cdn.xitu.io/v3/static/img/emoji.5594dbb.svg' />
                                        表情
                                    </span>
                                    <p>
                                        <label style={{color:'#c2c2c2',marginRight:'8px'}}>Enter</label>
                                        <Button type="primary" onClick={this.handlePressEnter.bind(this)}>评论</Button>
                                    </p>
                                </div>:''
                        }
                    </div>
                </section>
            </article>
        );
    }
}

export default CommentList;