import React, { Component } from 'react';
import { Row, Col } from 'antd';
import PublishDynamic from './PublishDynamic';
import './dynamic.less';

class Dynamic extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <div className="dynamic-container">
                <Row gutter={14}>
                    <Col className="gutter-row" span={18}>
                        <PublishDynamic />
                    </Col>
                    <Col className="gutter-row" span={6}>
                        右侧内容
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dynamic;