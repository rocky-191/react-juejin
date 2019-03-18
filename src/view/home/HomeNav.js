import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './home.less';
class HomeNav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handelClick=(i)=>{

    }
    render() {
        return (
            <ul>
                {this.props.tags.map((item,index)=>{
                    return <li key={item.path} className={item.isActived?'activeLi':''} onClick={this.handelClick.bind(this,index)}>
                        <Link to={`/timeline/${item.path}`}>{item.text}</Link>
                    </li>
                })}
            </ul>
        );
    }
}

export default HomeNav;