import { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom"
import './Header.css'



export const Header = () => {

    const logsig = () => {

    }

    return (
        <div className='header'>
            <div className='links'>
                <Link to="/">todo</Link>
                <Link to="/timetable"> 時間割</Link>
                <Link to="/karender"> カレンダー</Link>
                <Link to="/signup"> signup</Link>
                <Link to="/login"> login</Link>
            </div>

            <div className='icon'>
                <img src='/icon.png' />
            </div>
        </div>
    )
}