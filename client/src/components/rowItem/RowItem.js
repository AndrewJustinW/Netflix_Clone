import { useEffect, useState } from 'react'
import axios from "../../data/axios"
import { Add, KeyboardArrowDown, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'


const RowItem = ({ movie, isLargeRow, index }) => {
    //API GATHERED INFO
    const [rating, setRating] = useState('loading...')
    const [genres, setGenres] = useState(["loading..."])
    const [seasons, setSeasons] = useState('loading..')
    const [trailer, setTrailer] = useState('loading..')
    // const [duration, setDuration] = useState('')

    // FUNCTIONALITY USESTATES
    const [isMovie] = useState(movie.title ? true : false)   // Movies have titles, Series have names
    const [isHovered, setIsHovered] = useState(false)
    const [isLoading, setIsLoading] = useState(true)


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

        }

        const fetchData = async () => {
            let req
            let genresArray = []

            !isMovie
                ? req = await axios.get(`/tv/${movie.id}?api_key=33df560deb68ba199cabea7a3b00b7a5&language=en-US&append_to_response=videos`)
                : req = await axios.get(`/movie/${movie.id}?api_key=33df560deb68ba199cabea7a3b00b7a5&language=en-US&append_to_response=videos`)

            req.data?.genres.forEach(reqGenre => { genresArray.push(reqGenre.name) })

            // grab videos from response
            let videoKey = req.data.videos.results[0]?.key

            setGenres(genresArray || "")
            setSeasons(req.data.number_of_seasons)
            setTrailer(`https://www.youtube-nocookie.com/embed/${videoKey}?controls=0&autoplay=1&modestbranding=1&loop=1&playlist=${videoKey}&showinfo=0`)
        }
        fetchRatings()
        fetchData()

        setTimeout(() => {
            setIsLoading(false)

        }, 2000);

    }, [movie.id, isMovie, movie.name])

    // The returned endpoint for images doesn't include this part which is necessary to grab the images.
    const base_image_url = "https://image.tmdb.org/t/p/original"



    return (
        <>
            {isHovered && <div className="spacer-left"></div>}

            {isLoading
                ? <div className="item-loading"></div>

                : <div className={`row-item`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{ left: isHovered && index * 296 - 25 }} // Put it in correct positioning when hovered.
                >



                    {isHovered
                        ? <iframe src={trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                        : <div className="image-container">

                            <img
                                className={`row-item-poster`}
                                src={base_image_url + `${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`}
                                alt={movie.name}
                            />


                            <h3 className="image-title">{movie?.title || movie?.name}</h3>

                        </div>
                    }




                    <div className="item-info"

                        style={{ display: !isHovered && "none" }}>
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
                                <span key={genres.indexOf(genre)} className="genre">{genre}</span>
                            ))}
                        </div>
                    </div>
                </div>

            }

            {isHovered && <div className="spacer-right" style={{ width: `${index * 0.1 + 16}rem` }}></div>}
        </>
    )
}

export default RowItem
