import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from 'antd';
import './brochure.less'

function Aside(){
    return (
        <div className='aside'>
            <Card style={{ width: '100%' }}>
                <div style={{borderBottom:'1px solid #e6e8e8',padding:'15px 16px'}}>
                    <div style={{color:'#000',fontSize:'15px'}}>掘金小册是什么？</div>
                    <div style={{color:'#646464',marginTop:'8px',fontSize:'14px'}}>一个小篇幅、高浓度、成体系、有收益的技术学习平台</div>
                </div>
                <div style={{padding:'12px 16px'}}>
                    <div style={{color:'#000',fontSize:'15px'}}>关注公众号 领取优惠码</div>
                    <img alt='' src='//b-gold-cdn.xitu.io/v3/static/img/wechat-qr.f1926e7.png' />
                </div>
            </Card>
            <Card style={{ width: '100%',marginTop:'10px' }} className='link'>
                <NavLink to='/book/00001'>
                    <img alt='' src="//b-gold-cdn.xitu.io/v3/static/img/author.c5d975e.png" />
                    <div className="title">成为作者</div>
                </NavLink>
                <NavLink to='/feedback'>
                    <img alt='' src="//b-gold-cdn.xitu.io/v3/static/img/feedback.1230fb5.png" />
                    <div className="title">建议反馈</div>
                </NavLink>
            </Card>
        </div>
    )
}

export default Aside;