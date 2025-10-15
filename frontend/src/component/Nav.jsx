import LogIn from './LogIn'
import { popupZus } from '../Store/ZustandStore'
import SignIn from './SignIn'
const Nav = () => {
    const {onLogin, onSign} = popupZus()
  return (
    <nav className='flex justify-between py-5 bg-slate-800 text-white px-[100px]'>
        {/* logo */}
        <div>
            <a href="/">Logo</a>
        </div>
        {/* navigation links  */}
        <div className='flex gap-5'>
            <button onClick={() => onLogin(true)}>LogIn</button>
            <button onClick={() => onSign(true)}>SignUp</button>
            <button>Profile</button>
            <LogIn/>
            <SignIn/>
        </div>
    </nav>
  )
}

export default Nav
