import React, {useEffect, useState } from 'react'
import MsgWelcome from './MsgWelcome'
import { BiSend } from 'react-icons/bi'
import {messager} from "../Store/Message"
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import { liveStore } from '../Store/liveStore'


const LiveMsgBox = ({person, me}) => {
  const [text, setText] = useState('')
  const {live, liveLoading,getmessage, sendMessage} = liveStore()
  // const {msgloading, message, sendmessage, messageget} = messager()

useEffect(() => {
 getmessage({ person: person._id, me: me._id });
}, [person._id, me._id]);
  console.log(live);

  return (
    <div className='w-full lg:w-[68%] bg-slate-800 rounded-xl py-3 md:py-10 px-2 text-white md:px-5 min-h-screen h-screen overflow-hidden'>
      {/* conditional load  */}
      {!person._id? <>
      <MsgWelcome/>
      </> : <>
      <div className='w-full h-full flex flex-col items-center justify-between'>
        {/* user intro  */}
        <div className='w-full flex items-center gap-2 border-b pb-5 border-slate-700 shadow-xl'>
            <div className='w-[30px] aspect-square bg-[#1A535C] text-white rounded-full flex items-center justify-center'>{person?.name?.charAt(0)}</div>
            <h1>
                {person.name}
            </h1>
        </div>
        {/* message  */}
        <div className='w-full h-full overflow-y-auto flex flex-col-reverse'>
          {
            liveLoading ? <div className='w-full h-full flex  justify-center animate-spin'><AiOutlineLoading3Quarters/></div> :( Array.isArray(live) && [...live].reverse().map((item, index) =>(
              <div key={index} className={`w-fit px-5 py-2 rounded-lg my-2 ${item.senderID == me._id ? 'bg-[#1A535C] self-end' : 'bg-[#FEBA33] self-start'}`} >
                {item.message}
              </div>
            )))
          }
        </div>
        {/* sending process  */}
        <div className='flex items-center justify-between w-full gap-2 md:gap-5'>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} className='w-[90%] py-2 outline-none focus:ring-2 focus:ring-[#1A535C] bg-slate-700 text-white rounded-md px-5' placeholder='Type your message...'/>
            <button onClick={()=>{sendMessage({person :person._id, me: me._id, message: text}); setText('');getmessage({person: person._id, me: me._id})}} className='w-[10%] py-2 bg-[#1A535C] text-white rounded-md px-5 flex items-center justify-center'>
                <BiSend className='text-2xl'/>
            </button>
        </div>
      </div>
      </> }
    </div>
  )
}

export default LiveMsgBox
