import React from 'react'
import { NavLink } from 'react-router-dom'
import './brochure.less'

function TopNav({tags,changeLink}){
    return (
        <ul>
            {tags.map((item,index)=>{
                return <li key={item.path} onClick={()=>changeLink(item.path)}>
                    <NavLink to={`/books${item.path}`}>{item.text}</NavLink>
                </li>
            })}
        </ul>
    )
}

export default TopNav;