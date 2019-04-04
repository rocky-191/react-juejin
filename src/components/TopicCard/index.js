import React from 'react'
import { Card,Avatar,List } from 'antd';
import './self.less';

// class TopicCard extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  };
//     }
//     render() {
//         const { title,list,link }=this.props;
//         return (
//             <Card
//                 title={title}
//                 extra={<a href={link} style={{color:'#007fff'}}>全部></a>}
//                 style={{ width: '100%' }}
//                 className='topicCard'
//                 >
//                 <List
//                     itemLayout="horizontal"
//                     dataSource={list}
//                     renderItem={item => (
//                     <List.Item>
//                         <List.Item.Meta
//                             avatar={<Avatar shape="square" size={40} src={item.userImage} />}
//                             title={item.title}
//                             description={<div style={{color:'#8a9aa9'}}><span>{item.followNum}关注</span>·<span>{item.hotNews}沸点</span></div>}
//                         />
//                     </List.Item>
//                     )}
//                 />
//             </Card>
//         );
//     }
// }

function TopicCard({ title,list,link }){
    return (
        <Card
            title={title}
            extra={<a href={link} style={{color:'#007fff'}}>全部></a>}
            style={{ width: '100%' }}
            className='topicCard'
            >
            <List
                itemLayout="horizontal"
                dataSource={list}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar shape="square" size={40} src={item.userImage} />}
                        title={item.title}
                        description={<div style={{color:'#8a9aa9'}}><span>{item.followNum}关注</span>·<span>{item.hotNews}沸点</span></div>}
                    />
                </List.Item>
                )}
            />
        </Card>
    );
}

export default TopicCard;