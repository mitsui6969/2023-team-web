import React from 'react'
import { sidebarData } from './sidebarData'

function Sidebar() {
    return (
        <div className='sidebar'>
            <ul className='sideList'>
                {sidebarData.map((value) => {
                    return (
                        <li className='row' onClick={()=>{
                            window.location.pathname = value.link
                        }}>
                            <div id="icon">{value.title}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar