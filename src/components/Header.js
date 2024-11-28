import React from 'react'
import { NETFLIX_LOGO } from '../utils/urls'

const Header = () => {
  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img className='w-44' src={NETFLIX_LOGO} alt='logo' />
    </div>
  )
}

export default Header