import { useEffect, useState } from 'react'
import axios from '../../data/axios'
import requests from '../../data/requests'
import { InfoOutlined, PlayArrow } from '@mui/icons-material'


const Featured = () => {

    const [movie, setMovie] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const req = await axios.get(requests.fetchNetflixOriginals)
            // console.log(req.data.results[Math.floor(Math.random() * req.data.results.length) - 1])

            // This returns 1 random movie from the array of objects and sets it as the state of movie
            setMovie(req.data.results[Math.floor(Math.random() * req.data.results.length) - 1])
            return req
        }

        fetchData()
    }, [])

    const shortOverview = movie.overview ? movie.overview.substring(0, 130) + "..." : '';


    // console.log(movie?.overview.length)

    return (

        <header className="featured">

            <div className="featured-fade-bottom"></div>

            <img
                className="featured-img"
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                alt=""
            />

            <div className="featured-info">

                <h1 className="featured-title">
                    {/* Set Movie title but account for possible naming inconsistincies in API */}
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <h2 className="featured-desc">

                    {shortOverview}

                </h2>

                <div className="featured-buttons">

                    <button className="play">

                        <PlayArrow className="icons" sx={{ fontSize: 40 }} />
                        <span>Play</span>

                    </button>

                    <button className="more-info">

                        <InfoOutlined className="icons" sx={{ fontSize: 40 }} />
                        <span>More Info</span>

                    </button>

                </div>


            </div>


        </header>
    )

}

export default Featured
