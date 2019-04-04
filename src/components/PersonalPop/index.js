import React from 'react'
import { Avatar,Button } from 'antd';
import './self.less'

// class PersonalPop extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  };
//     }
//     render() {
//         const { id,avatar,author,description,following,follower,isFollowed}=this.props.info
//         return (
//             <div className='personalPop'>
//                 <div className='part1'>
//                     <Avatar size={60} src={avatar} />
//                     <div style={{marginLeft:'15px',fontSize:'14px'}}>
//                         <p style={{color:'#333'}}>{author}</p>
//                         <p style={{color:'#999'}}>{description}</p>
//                     </div>
//                 </div>
//                 <ul>
//                     <li>
//                         <p className='num'>{following}</p>
//                         <p style={{color:'#999'}}>关注</p>
//                     </li>
//                     <li>
//                         <p className='num'>{follower}</p>
//                         <p style={{color:'#999'}}>关注者</p>
//                     </li>
//                     <li>
//                         <Button onClick={()=>this.props.handleFollow(id)}>{isFollowed?'已关注':'关注'}</Button>
//                     </li>
//                 </ul>
//             </div>
//         );
//     }
// }

function PersonalPop({info,handleFollow}){
    const { id,avatar,author,description,following,follower,isFollowed}=info
    return (
        <div className='personalPop'>
            <div className='part1'>
                <Avatar size={60} src={avatar} />
                <div style={{marginLeft:'15px',fontSize:'14px'}}>
                    <p style={{color:'#333'}}>{author}</p>
                    <p style={{color:'#999'}}>{description}</p>
                </div>
            </div>
            <ul>
                <li>
                    <p className='num'>{following}</p>
                    <p style={{color:'#999'}}>关注</p>
                </li>
                <li>
                    <p className='num'>{follower}</p>
                    <p style={{color:'#999'}}>关注者</p>
                </li>
                <li>
                    <Button onClick={()=>handleFollow(id)}>{isFollowed?'已关注':'关注'}</Button>
                </li>
            </ul>
        </div>
    );
}

export default PersonalPop;