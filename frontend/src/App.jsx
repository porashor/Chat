import React from 'react'
import Nav from './component/Nav'
import Home from './page/Home'
import { Toaster } from 'react-hot-toast';
import socket from './socket/socket';
import { useState } from 'react';
import { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LiveMsg from './page/LiveMsg';
const App = () => {
  const [msg, setMsg] = useState('')
  useEffect(() => {
    socket.on('chatBox', (data) => {
      setMsg(data)
    })
  })
  return (
    <Router>
      <div className='relative transition-all-1s'>
      <Nav/>
      <Routes>
        <Route path='/live' element={<Home/>}/>
        <Route path='/' element={<LiveMsg/>}/>
      </Routes>
      <Toaster/>
    </div>
    </Router>
  )
}

export default App
