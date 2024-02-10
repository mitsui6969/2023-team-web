import React from 'react'
import { sidebarData } from './sidebarData'

function Sidebar() {
    return (
        <div className='sidebar'>
            <ul className='sideList'>
                {sidebarData.map((value) => {
                    return (
                        <li>
                            <div id="icon">{value.title}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar