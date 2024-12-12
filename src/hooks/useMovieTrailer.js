import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/urls"
import { addTrailerVideos } from "../store/slices/moviesSlice"
import { useEffect } from "react"

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()

    const getMoviesVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json()
        const filterData = json?.results?.filter((item, index) => {
            return item.type === "Trailer"
        })
        const trailerData = filterData.length ? filterData[0] : json.results[0]
        dispatch(addTrailerVideos(trailerData))
    }
    useEffect(() => {
        getMoviesVideos()
    }, [])
}

export default useMovieTrailer