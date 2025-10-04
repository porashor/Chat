import React from 'react'
import Nav from './component/Nav'
import Home from './page/Home'
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className='relative transition-all-1s'>
      <Nav/>
      <Home/>
      <Toaster/>
    </div>
  )
}

export default App
