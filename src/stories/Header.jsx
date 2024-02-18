import React from 'react'
import { Link } from "react-router-dom"
import './Header.css'



export const Header = () => {
    return (
        <div className='header'>
            <Link to="/">todo</Link>
            <Link to="/timetable"> 時間割</Link>
            <Link to="/karender"> カレンダー</Link>
        </div>
    )
}