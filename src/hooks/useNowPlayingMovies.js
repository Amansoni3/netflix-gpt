import { useEffect } from "react"
import { addNowPlayingMovies } from "../store/slices/moviesSlice"
import { API_OPTIONS } from "../utils/urls"
import { useDispatch } from "react-redux"

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const json = await data.json()
        console.log(json.results, 'data')
        dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(() => {
        getNowPlayingMovies()
    }, [])
}

export default useNowPlayingMovies