import React from 'react'
import { TMDB_IMAGE_URL_PATH } from '../utils/urls'

const MovieCard = ({ posterPath }) => {
    return (
        <div className='w-48 cursor-pointer'> 
            <img
                src={TMDB_IMAGE_URL_PATH + posterPath}
                alt='Movie Card'
                className='rounded-xl'
            />
        </div>
    )
}

export default MovieCard