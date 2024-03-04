import { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom"
import './Header.css'



export const Header = () => {
    // const [ doClick , setDoClick ] = useState(false)

    // const openIcon = () => setDoClick(true)

    // const refEle = useRef(null)

    // const handleClickDocument = useRef(null)

    // useEffect(() => {
    //     handleClickDocument.current = ( e ) => {
    //         if( !refEle.current.contains( e.target )) {
    //             setDoClick(false)
    //             document.removeEventListener( 'click', handleClickDocument.current )
    //         }
    //     }
    // }, [])

    // useEffect ( () => {
    //     doClick && document.addEventListener( 'click', handleClickDocument.current )
    // }, [ doClick ])

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
                <img src="icon.png" alt="アイコン" className="icon-image"></img>
            </div>
        </div>
    )
}