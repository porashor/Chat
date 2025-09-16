import React from 'react'
import { popupZus } from '../Store/ZustandStore'
const LogIn = () => {
    const {loginopen, onLogin} = popupZus()
  return (
    <div className={`absolute top-0 left-0 w-[100%] h-screen bg-[#FEBA33] flex items-center justify-center shadow-2xl shadow-[#1A535C]} ${loginopen ? 'block' : 'hidden' }`}>
      <div className='min-h-[300px] min-w-[350px] bg-white rounded-xl'>
        {/* header  */}
        <div className='w-full py-5 text-[#FEBA33] h-[50px] border-b shadow-md flex items-center justify-between'>
          <h1 className='text-xl uppercase font-bold ml-5'>LogIn</h1>
          <button className='mr-5' onClick={() => onLogin(false)}>X</button>
        </div>
        <form className='p-10 flex flex-col gap-5 h-full w-full'>

            <input type="email" placeholder='Enter email' className='py-2 outline-none focus:ring-2 focus:ring-[#1A535C] bg-slate-200 text-black rounded-md px-5'/>

            <input type="password" placeholder='Enter password' className='py-2 outline-none focus:ring-2 focus:ring-[#1A535C] bg-slate-200 text-black rounded-md px-5'/>

            <input type="submit" value={'Log In'} className='py-2 bg-[#1A535C] text-white rounded-md px-5'/>

        </form>
        <div className='w-full py-5 h-[50px] border-t  flex items-center justify-center text-[#1A535C]'>
          Don't have an account ?<button className='mr-5 text-[#FEBA33]'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default LogIn
