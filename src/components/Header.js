import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { NETFLIX_LOGO, NETFLIX_USER_ICON, SUPPORTED_LANGUAGES } from '../utils/urls'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../store/slices/userSlice';
import { toggleGptSearchView } from '../store/slices/gptSlice';
import { changeLanguage } from '../store/slices/configSlice';


const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(store => store.user)
  const showGptSearch = useSelector(store => store.gpt).showGptSearch

  const handleSingOut = async () => {
    await signOut(auth).then(() => {
      console.log("Sign out successfull...")
    }).catch((error) => {
      console.log(error, 'error')
      navigate('/error')
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName
        }))
        navigate('/browse')
      }
      else {
        dispatch(removeUser())
        navigate("/")
      }
    });

    return () => unsubscribe()
  }, [])

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }


  return (
    <div className='flex justify-between absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img className='w-44' src={NETFLIX_LOGO} alt='logo' />
      {
        user && (
          <div className='flex items-center gap-3 p-2'>
            <img alt='user-icon' src={NETFLIX_USER_ICON} className='w-10 h-10 rounded-md' />
            {
              showGptSearch && <select className='bg-red-600 text-white px-3 py-2 font-bold rounded-md cursor-pointer' onChange={handleLanguageChange}>
                {
                  SUPPORTED_LANGUAGES.map((item, index) => (
                    <option key={item.name} value={item.identifier}>{item.name}</option>
                  ))
                }
              </select>
            }
            <button onClick={handleGptSearchClick} className='text-white font-bold bg-cyan-500 rounded-md px-3 py-2'>{showGptSearch ? "Homepage" : "GPT Seach"}</button>
            <p className='bg-red-600 text-white px-3 py-2 font-bold rounded-md cursor-pointer'>{user?.displayName || "Name not available"}</p>
            <button onClick={handleSingOut} className='bg-red-600 text-white px-3 py-2 font-bold rounded-md'>(Sign Out)</button>
          </div>
        )
      }
    </div>
  )
}

export default Header