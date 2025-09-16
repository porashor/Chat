import React from 'react'
import UserList from '../component/UserList'
import MessageBox from '../component/MessageBox'

const Home = () => {
  return (
    <div className='flex flex-col gap-10 p-10 bg-slate-700'>
      {/* user details  */}
      <div className='flex gap-5 items-center'>
        <div className='w-[30px] aspect-square bg-[#1A535C] text-white rounded-full flex items-center justify-center'>a</div>
        <h1 className='text-2xl font-bold'>Ahmed</h1>
      </div>
      {/* main message section loading here  */}
      <div className='flex gap-5 flex-wrap'>
        <UserList/>
        <MessageBox/>
      </div>
    </div>
  )
}

export default Home
