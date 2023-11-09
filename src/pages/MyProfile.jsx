/* eslint-disable no-unused-vars */
import React from 'react'
import useAuth from '../hooks/useAuth';

const MyProfile = () => {

    const { user } = useAuth();

  return (
    <div className='border-2 border-primary p-20 my-20 rounded-xl text-center md:mx-40 lg:mx-96'>
       <div className="w-28 mx-auto">
            <img src={user.photoURL} alt={user.displayName} className='rounded-full mb-5'/>
       </div>
       <h2 className='font-semibold text-base'>{user.displayName}</h2>
       <p className='font-semibold text-base'>{user.email}</p>
    </div>
  )
}

export default MyProfile
