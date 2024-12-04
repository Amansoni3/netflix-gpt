import React from 'react'
import { signOut } from "firebase/auth";
import { NETFLIX_LOGO, NETFLIX_USER_ICON } from '../utils/urls'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(store => store.user)
  // console.log(user?.displayName, "user")

  const handleSingOut = async () => {
    await signOut(auth).then(() => {
      console.log("Sign out successfull...")
      navigate('/')
    }).catch((error) => {
      console.log(error, 'error')
      navigate('/error')
    });
  }

  return (
    <div className='flex justify-between absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img className='w-44' src={NETFLIX_LOGO} alt='logo' />
      {
        user && (
          <div className='flex items-center gap-3 p-2'>
            <img alt='user-icon' src={NETFLIX_USER_ICON} className='w-10 h-10 rounded-md' />
            <p className='bg-red-600 text-white px-3 py-2 font-bold rounded-md cursor-pointer'>{user?.displayName || "Name not available"}</p>
            <button onClick={handleSingOut} className='bg-red-600 text-white px-3 py-2 font-bold rounded-md'>(Sign Out)</button>
          </div>
        )
      }
    </div>
  )
}

export default Header