import { useEffect } from "react"
import { addUpComingMovies } from "../store/slices/moviesSlice"
import { API_OPTIONS } from "../utils/urls"
import { useDispatch } from "react-redux"

const useUpcomingMovies = () => {
    const dispatch = useDispatch()

    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
        const json = await data.json()
        console.log(json,'sssssss')
        dispatch(addUpComingMovies(json.results))
    }

    useEffect(() => {
        getUpcomingMovies()
    }, [])
}

export default useUpcomingMovies