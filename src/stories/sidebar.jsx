import React from 'react';
import './sidebar.css';
import { sidebarData } from './sidebarData';

export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul className='sideList'>
                {sidebarData.map((value, key) => {
                    return (
                        <li key={key} className='row' onClick={()=>{
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
