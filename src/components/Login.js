import React, { useState, useRef } from 'react'
import Header from './Header'
import { NETFLIX_BG } from '../utils/urls'
import { checkValidation } from '../utils/validate'

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true)
  const [errorMessage , setErrorMessage] = useState(null)
  const fullName = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const handleToggleForm = () => {
    setIsSignIn(!isSignIn)
  }

  const handleButtonClick = () => {
    const message = checkValidation(email.current.value, password.current.value)
    setErrorMessage(message)
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src={NETFLIX_BG} alt='bg' />
      </div>
      {/* Login form */}
      <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black bg-opacity-80 mx-auto right-0 left-0 my-36 text-white shadow-lg'>

        <h1 className='font-bold text-3xl py-4 text-left'>{isSignIn ? "Sign In" : "Sign Up"}</h1>

        <div className='flex flex-col justify-center items-center'>

          {
            !isSignIn && (
              <input type='text' ref={fullName} placeholder='Full Name' className='p-2 m-2 w-full rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-50 bg-gray-700 bg-opacity-80' />
            )
          }

          <input type='text' ref={email} placeholder='Email Address' className='p-2 m-2 w-full rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-50 bg-gray-700 bg-opacity-80' />

          <input type='password' ref={password} placeholder='Password' className='p-2 m-2 w-full rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-50 bg-gray-700 bg-opacity-80' />

          <p className='text-red-600 font-bold'>{errorMessage}</p>

          <button className='px-4 py-2 m-4 w-full bg-red-600 hover:bg-red-700 font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-red-500' onClick={handleButtonClick}>{isSignIn ? "Sign In" : "Sign Up"}</button>
        </div>

        <p className='mt-5 font-bold cursor-pointer' onClick={handleToggleForm}>{isSignIn ? "New to Netflix? Sign Up now" : "Already a user Sign In now"}</p>

      </form>
    </div>
  )
}

export default Login