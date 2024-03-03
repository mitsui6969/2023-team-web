import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import './styles/global.css'
import { Sidebar } from "./stories/sidebar.jsx"
import { Header } from './stories/Header.jsx'

import { Signup } from './signup.jsx'
import { Login } from './login.jsx'
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

      <div className='main'>
        <Routes>
          <Route path="/" element={ <Task />} />
          <Route path="/timetable" element={ <Timetable />} />
          <Route path="/karender" element={ <Karender />} />
          <Route path="/*" element={ <NotFound />} />
          <Route path="/signup" element={ <Signup /> } />
          <Route path="/login" element={ <Login /> } />
        </Routes>
      </div>

      {/* <div className='hello'>Hello</div> */}
    </>
  )
}

export default App
