import Nav from './component/Nav'
import { Toaster } from 'react-hot-toast';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LiveMsg from './page/LiveMsg';
import { msgfunc } from './Store/ZustandStore';
import { useEffect } from 'react';
import { popupZus } from './Store/ZustandStore';

const App = () => {
  // const {onLogin, onSign} = popupZus()
  // const {me} = msgfunc()
  // if(me.name === undefined){
  //     onLogin(true)
  //   }else{
  //     onLogin(false)
  //     onSign(false)
  //   }
  // do something for popup
  return (
    <Router>
      <div className='relative transition-all-1s'>
      <Nav/>
      <Routes>
        <Route path='/' element={<LiveMsg/>}/>
      </Routes>
      <Toaster/>
    </div>
    </Router>
  )
}

export default App
