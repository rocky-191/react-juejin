import React, { Component } from 'react';

class HomeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <div>
                详情{this.props.tag}
            </div>
        );
    }
}

export default HomeDetails;