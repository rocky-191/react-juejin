import React, { Component } from 'react';
import './dynamic.less';

class Dynamic extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <div className="dynamic-container">
                动态页面内容
            </div>
        );
    }
}

export default Dynamic;