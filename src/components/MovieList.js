import React from 'react'
import MovieCard from './MovieCard'
import "../css/hidescrollbar.css"

const MovieList = ({ title, movies }) => {
    console.log(movies, 'movies')

    return (
        <div className='px-12 pb-4'>
            <h1 className='font-bold text-2xl pt-6 pb-4 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll scrollbar-hide'>
                <div className='flex gap-3'>
                    {
                        movies?.map(movies => (
                            <MovieCard key={movies?.id} posterPath={movies?.poster_path} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList