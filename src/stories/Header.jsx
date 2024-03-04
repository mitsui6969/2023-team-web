import { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom"
import './Header.css'



export const Header = () => {
    const [ doClick , setDoClick ] = useState(false)

    const openIcon = () => setDoClick(true)

    const refEle = useRef(null)

    const handleClickDocument = useRef(null)

    useEffect(() => {
        handleClickDocument.current = ( e ) => {
            if( !refEle.current.contains( e.target )) {
                setDoClick(false)
                document.removeEventListener( 'click', handleClickDocument.current )
            }
        }
    }, [])

    useEffect ( () => {
        doClick && document.addEventListener( 'click', handleClickDocument.current )
    }, [ doClick ])

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

            <div>{ logsig }</div>

            <div className='icon' onClick={ openIcon }></div>
            <div className='icon_open' data-show={ doClick ? 'show' : 'hidden'}  >
                <div className='icom_img'>icon</div>
                <p className='userName'>name</p>
            </div>
        </div>
    )
}