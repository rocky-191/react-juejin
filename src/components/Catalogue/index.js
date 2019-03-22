import React, { Component } from 'react';
import { Timeline } from 'antd';
import './self.less'

class Catalogue extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    //(item.children && item.children.length!=='')?<Catalogue data={item.children} />:item.text
    render() {
        return (
            <div className='text-catalogue'>
                <Timeline>
                    {this.props.data.map((item,index)=>{
                        return <Timeline.Item color='#000' key={item.text} dot={<span className='catalogue-circle'></span>}>{(item.children && item.children.length !== 0)?<div><a href={`#heading-${index}`}>{item.text}</a><div className='secondCatalogue'><Catalogue data={item.children} /></div></div>:<a href={`#heading-${index}`}>{item.text}</a>}</Timeline.Item>
                    })}
                </Timeline>
            </div>
        );
    }
}

export default Catalogue;