import React, { Component } from 'react';

class HomeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <div>
                {this.props.params}
            </div>
        );
    }
}

export default HomeDetails;