import React from 'react'
import './styles/karendar.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export const Karender = () => {
    return (
        <>
            <div>karender</div>
            <div id='fc'>
                <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
            </div>
        </>
    )
}