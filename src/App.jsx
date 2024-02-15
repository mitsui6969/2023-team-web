import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import './styles/global.css'
import Sidebar from "./stories/sidebar.jsx"


function App() {

  return (
    <>
      <div className='side'>
        <Sidebar />
      </div>

      <div className='hello'>Hello</div>
    </>
  )
}

export default App
