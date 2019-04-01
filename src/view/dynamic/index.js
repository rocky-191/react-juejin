import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { NavLink } from 'react-router-dom'
import PublishDynamic from './PublishDynamic';
import Card from './Card';
import SideNav from './SideNav';
import './dynamic.less';

class Dynamic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classifyData:[
                {
                    tag:'recommended',
                    text:'推荐'
                },
                {
                    tag:'all',
                    text:'综合'
                },
                {
                    tag:'pins',
                    text:'沸点'
                }
            ]
        }
    }
    render() {
        return (
            <div className="dynamic-container">
                <Row gutter={14}>
                    <Col className="gutter-row" span={18}>
                        <PublishDynamic />
                        <div className='dynamicClassify'>
                            <ul>
                                {this.state.classifyData.map(item=>{
                                    return <li key={item.tag}>
                                        <NavLink to={`/dynamic/${item.tag}`}>{item.text}</NavLink>
                                    </li>
                                })}
                            </ul>
                        </div>
                        <Card />
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <SideNav />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dynamic;