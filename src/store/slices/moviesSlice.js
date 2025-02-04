import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovie: null,
        trailerVideos: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },
        addUpComingMovies: (state, action) => {
            state.upcomingMovie = action.payload
        },
        addTrailerVideos: (state, action) => {
            state.trailerVideos = action.payload
        }
    }
})

export const { addNowPlayingMovies, addTrailerVideos, addPopularMovies, addTopRatedMovies, addUpComingMovies } = moviesSlice.actions
export default moviesSlice.reducer