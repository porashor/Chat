import React, { useEffect  } from 'react'
import UserList from '../component/UserList'
import LiveMsgBox from '../component/LiveMsgBox'
import { msgfunc } from '../Store/ZustandStore'

const LiveMsg = () => {
  const {person, me, onMe} = msgfunc()
    useEffect(() => {
      onMe()
    }, [])
  return (
    <div className='flex flex-col gap-10 p-10 bg-slate-700'>
      {/* user details  */}
      <div className='flex gap-5 items-center'>
        <div className='w-[30px] aspect-square bg-[#1A535C] text-white rounded-full flex items-center justify-center'>{me?.name?.charAt(0)}</div>
        <h1 className='text-2xl font-bold'>{me.name}</h1>
      </div>
      {/* main message section loading here  */}
      <div className='flex gap-5 flex-wrap'>
        <UserList/>
        <LiveMsgBox person={person} me={me}/>
      </div>
    </div>
  )
}

export default LiveMsg
