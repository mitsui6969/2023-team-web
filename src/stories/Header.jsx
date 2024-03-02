import React, { useState } from 'react'
import { Link } from "react-router-dom"
import './Header.css'



export const Header = () => {
    const [ doClick , setDoClick ] = useState(false)

    const openIcon = () => setDoClick(true)

    return (
        <div className='header'>
            <div className='links'>
                <Link to="/">todo</Link>
                <Link to="/timetable"> 時間割</Link>
                <Link to="/karender"> カレンダー</Link>
            </div>

            <div className='icon' onClick={ openIcon }></div>
            <div className='icon_open' data-show={ doClick ? 'show' : 'hidden'}>
                <div className='icom_img'>icon</div>
                <p className='userName'>name</p>
            </div>
        </div>
    )
}