import { useEffect, useState } from 'react'
import axios from "../../data/axios"
import { Add, KeyboardArrowDown, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'


const RowItem = ({ movie, isLargeRow }) => {

    const [rating, setRating] = useState('')
    const [genres, setGenres] = useState([])
    const [seasons, setSeasons] = useState('')
    const [duration, setDuration] = useState('')

    // Movies have titles, Series have names
    const [isMovie, setIsMovie] = useState(movie.title ? true : false)

    useEffect(() => {

        const fetchRatings = async () => {
            let req

            !isMovie
                ? req = await axios.get(`/tv/${movie.id}/content_ratings?api_key=33df560deb68ba199cabea7a3b00b7a5`)
                : req = await axios.get(`/movie/${movie.id}/release_dates?api_key=33df560deb68ba199cabea7a3b00b7a5 `)

            !isMovie
                ? setRating(req.data.results[0].rating || "Not Rated")
                : setRating(req.data.results?.find(obj => {
                    return obj.iso_3166_1 === 'US'
                })?.release_dates[0].certification || "Not Rated")

            // return rating

        }
        fetchRatings()

        const fetchData = async () => {
            let req
            let genresArray = []

            !isMovie
                ? req = await axios.get(`/tv/${movie.id}?api_key=33df560deb68ba199cabea7a3b00b7a5&language=en-US`)
                : req = await axios.get(`/movie/${movie.id}?api_key=33df560deb68ba199cabea7a3b00b7a5&language=en-US`)

            req.data?.genres.forEach(reqGenre => { genresArray.push(reqGenre.name) })

            setGenres(genresArray || "")
            setSeasons(req.data.number_of_seasons)

        }

        fetchData()
    }, [movie.id, isMovie, movie.name])

    // The returned endpoint for images doesn't include this part which is necessary to grab the images.
    const base_image_url = "https://image.tmdb.org/t/p/original"

    return (
        <div className="row-item">

            <div className="image-container">
                <img
                    className={`row-item-poster`}
                    src={base_image_url + `${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name}
                />
                <h3 className="image-title">{movie.title || movie.name}</h3>

            </div>





            <div className="item-info">
                <div className="icons-container">
                    <div className="icons-left">
                        <PlayArrow className="item-icon" sx={{ fontSize: 40 }} />
                        <Add className="item-icon" sx={{ fontSize: 40 }} />
                        <ThumbUpAltOutlined className="item-icon" sx={{ fontSize: 40 }} />
                        <ThumbDownAltOutlined className="item-icon" sx={{ fontSize: 40 }} />
                    </div>

                    <div className="icons-right">
                        <KeyboardArrowDown className="item-icon" sx={{ fontSize: 40 }} />
                    </div>

                </div>

                <div className="item-info-details">
                    <span className="item-average">Rating: {movie.vote_average} / 10</span>
                    <span className="rating">{rating}</span>
                    {!isMovie && <span className="seasons">{seasons === 1 ? "1 Season" : seasons + " Seasons" || ""} </span>}
                    <span className="resolution">HD</span>
                </div>

                <div className="genres">
                    {genres.map(genre => (
                        <span className="genre">{genre}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RowItem
