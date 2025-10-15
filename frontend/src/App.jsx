import Nav from './component/Nav'
import { Toaster } from 'react-hot-toast';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LiveMsg from './page/LiveMsg';
const App = () => {
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
