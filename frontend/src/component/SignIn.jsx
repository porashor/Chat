import React from 'react'
import { popupZus } from '../Store/ZustandStore'
import { formFunction } from '../Store/ZustandStore'
import { AiOutlineLoading3Quarters } from "react-icons/ai";



const SignIn = () => {

    const {signopen, onLogin, onSign} = popupZus()
    const {name, email, password,  singinLoading,  onName, onEmail, onPassword, LogInNow, SignInNow, logOut} = formFunction()
    const signupNow = (e)=>{
      e.preventDefault()
      SignInNow({name,email,password})
    }

  return (
    <div className={`absolute top-0 left-0 w-[100%] h-screen bg-[#FEBA33] flex items-center justify-center shadow-2xl shadow-[#1A535C]} ${signopen ? 'block' : 'hidden' }`}>
      <div className='min-h-[300px] min-w-[350px] bg-white rounded-xl'>
        {/* header  */}
        <div className='w-full py-5 text-[#FEBA33] h-[50px] border-b shadow-md flex items-center justify-between'>
          <h1 className='text-xl uppercase font-bold ml-5'>SignIn</h1>
          <button className='mr-5' onClick={() => onSign(false)}>X</button>
        </div>
        <form onSubmit={signupNow} className='p-10 flex flex-col gap-5 h-full w-full'>

            <input type="text" value={name} onChange={(e) => onName(e.target.value)} placeholder='Enter name' className='py-2 outline-none focus:ring-2 focus:ring-[#1A535C] bg-slate-200 text-black rounded-md px-5'/>

            <input type="email" value={email} onChange={(e) => onEmail(e.target.value)} placeholder='Enter email' className='py-2 outline-none focus:ring-2 focus:ring-[#1A535C] bg-slate-200 text-black rounded-md px-5'/>

            <input type="password" value={password} onChange={(e) => onPassword(e.target.value)} placeholder='Enter password' className='py-2 outline-none focus:ring-2 focus:ring-[#1A535C] bg-slate-200 text-black rounded-md px-5'/>

            <button type='submit' className='py-2 bg-[#1A535C] text-white rounded-md px-5'>{singinLoading ? <div className='flex items-center justify-center animate-spin'><AiOutlineLoading3Quarters/></div> : 'sign up'}</button>

        </form>
        <div className='w-full py-5 h-[50px] border-t  flex items-center justify-center text-[#1A535C]'>
          Don't have an account ?<button className='mr-5 text-[#FEBA33]' onClick={() => {onLogin(true); onSign(false)}}>Log in </button>
        </div>
        <button className='w-full py-5 h-[50px] border-t  flex items-center justify-center text-[#1A535C]' onClick={logOut}>sign out</button>
      </div>
    </div>
  )
}

export default SignIn
