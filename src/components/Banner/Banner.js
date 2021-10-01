import React, { useEffect, useState } from 'react'
import axios from '../../data/axios'
import requests from '../../data/requests'

const Banner = () => {

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

    const truncate = (str, n) => {
        return str?.length.n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                //Set backround image dynamically depending on movie
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            }}
        >

            <div className="banner-contents">

                <h1 className="banner-title">
                    {/* Set Movie title but account for possible naming inconsistincies in API */}
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>



                <h1 className="banner-description">
                    {truncate(movie?.overview, 100)}
                </h1>

                <div className="banner-buttons">

                    <button className="banner-button"> Play </button>
                    <button className="banner-button"> More Info </button>

                </div>
            </div>

            <div className="banner--fade-bottom"></div>

        </header>
    )
}

export default Banner
