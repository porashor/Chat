import React, { useEffect} from 'react'
import {userListing, msgfunc} from '../Store/ZustandStore'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'

const UserList = () => {
  const {user, profile, userloading, profileloading, userListGet, getProfileData} = userListing()
  const {me, onPerson} = msgfunc()

  useEffect(() => {
    userListGet()
    getProfileData()
  }, [])
  return (
    <div className='w-full lg:w-[30%] bg-slate-800 rounded-xl py-3 md:py-10 px-2 text-white md:px-5 h-screen overflow-y-auto'>
      <ul>
        { userloading ? <div className='flex items-center justify-center animate-spin'><AiOutlineLoading3Quarters/></div> :
          user.map((item, index)=>(
            <li key={index} className='py-2 text-xl capitalize hover:bg-slate-700 px-5 rounded-lg focus:bg-slate-700'><a onClick={() => onPerson(item)}>{item.name}</a></li>
          ))
        }
      </ul>
    </div>
  )
}

export default UserList
