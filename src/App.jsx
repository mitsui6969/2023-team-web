import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import './styles/global.css'
import {Sidebar} from "./stories/sidebar.jsx"
import { Header } from './stories/Header.jsx'

import { Task } from './task.jsx'
import { Karender } from './karender.jsx'
import { Timetable } from './timetable.jsx'
import NotFound from './NotFound.jsx'

function App() {

  return (
    <>
      <header className='Header'>
        <Header />
      </header>

      <div className='sidebar'>
        <Sidebar />
      </div>

      <Routes>
        <Route path="/" element={ <Task />} />
        <Route path="/timetable" element={ <Timetable />} />
        <Route path="/karender" element={ <Karender />} />
        <Route path="/*" element={ <NotFound />} />
      </Routes>

      {/* <div className='hello'>Hello</div> */}
    </>
  )
}

export default App
