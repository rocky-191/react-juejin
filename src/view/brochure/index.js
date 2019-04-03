import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import { Affix,Row, Col } from 'antd';
import TopNav from './TopNav';
import BookList from './BookList';
import Aside from './Aside';
import './brochure.less';

class Brochure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top: 60,
            tags:[
                {
                    path:'',
                    text:'全部'
                },
                {
                    path:'/frontend',
                    text:'前端'
                },
                {
                    path:'/backend',
                    text:'后端'
                },
                {
                    path:'/mobile',
                    text:'移动开发'
                },
                {
                    path:'/blockchain',
                    text:'区块链'
                },
                {
                    path:'/general',
                    text:'通用'
                }
            ],
            tagType:''
        }
    }

    changeLink=(path)=>{
        this.setState({
            tagType:path
        });
    }

    render() {
        let {match}=this.props;
        return (
            <div className="brochure-container">
                <Affix offsetTop={this.state.top}>
                    <div className="brochure-nav">
                        <nav>
                            <TopNav tags={this.state.tags} changeLink={this.changeLink} />
                        </nav>
                    </div>
                </Affix>
                <div className="ct marginTop20">
                    <Row gutter={14}>
                        <Col className="gutter-row" span={18}>
                            <Route exact path={match.url} render={(props) => <div><BookList tag={this.state.tagType} /></div>}/>
                            <Route path={`/books/:tagType`} render={(props) => <div><BookList tag={this.state.tagType} /></div>}/>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Aside />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Brochure;