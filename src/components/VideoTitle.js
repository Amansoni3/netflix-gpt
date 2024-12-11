import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

const VideoTitle = ({title , overview}) => {
  return (
    <div className='pt-36 px-12'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='text-lg py-4 w-1/2'>{overview}</p>
        <div className='flex gap-3 my-4'>
            <button className='bg-gray-500 px-6 py-2 font-bold rounded hover:bg-gray-300 opacity-50 text-black'><PlayArrowIcon/>Play</button>
            <button className='bg-gray-500 px-6 py-2 font-bold rounded hover:bg-gray-300 opacity-50 text-black'><InfoRoundedIcon/>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle