import React from 'react'
import MsgWelcome from './MsgWelcome'
import { BiSend } from 'react-icons/bi'

const MessageBox = () => {
  return (
    <div className='w-full lg:w-[68%] bg-slate-800 rounded-xl py-3 md:py-10 px-2 text-white md:px-5 min-h-screen h-screen overflow-hidden'>
      {/* conditional load  */}
      {false? <>
      <MsgWelcome/>
      </> : <>
      <div className='w-full h-full flex flex-col items-center justify-between'>
        {/* user intro  */}
        <div className='w-full flex items-center gap-2 border-b pb-5 border-slate-700 shadow-xl'>
            <div className='w-[30px] aspect-square bg-[#1A535C] text-white rounded-full flex items-center justify-center'>a</div>
            <h1>
                user
            </h1>
        </div>
        {/* message  */}
        <div className='w-full h-full flex items-center justify-center text-2xl font-bold'>
          Welcome to new Chat!
        </div>
        {/* sending process  */}
        <div className='flex items-center justify-between w-full gap-2 md:gap-5'>
            <input type="text" className='w-[90%] py-2 outline-none focus:ring-2 focus:ring-[#1A535C] bg-slate-200 text-black rounded-md px-5 bg-slate-700 text-white' placeholder='Type your message...'/>
            <button className='w-[10%] py-2 bg-[#1A535C] text-white rounded-md px-5 flex items-center justify-center'>
                <BiSend className='text-2xl'/>
            </button>
        </div>
      </div>
      </> }
    </div>
  )
}

export default MessageBox
