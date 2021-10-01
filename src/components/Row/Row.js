import React, { useEffect, useState } from 'react'
import axios from "../../data/axios"  // This is using axios.create we've created instead of axios from nodemodules. (This includes the baseURL when making requests)

const Row = ({ title, fetchURL, isLargeRow }) => {

    const [movies, setMovies] = useState([]);

    // The returned endpoint for images doesn't include this part which is necessary to grab the images.
    const base_image_url = "https://image.tmdb.org/t/p/original"

    // Pulling in data using fetchURL inside of useEffect
    useEffect(() => {
        const fetchData = async () => {

            const req = await axios.get(fetchURL);  // fetchURL is pulled in as a prop from app.js. App.js is using api endpoints stored in requests.js
            setMovies(req.data.results)
        }

        fetchData()

    }, [fetchURL])

    console.log(movies)

    return (
        <div className="row">

            <h2>{title}</h2>

            <div className="row-container">
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        className={`row-item-poster ${isLargeRow && "large-poster"}`}
                        src={base_image_url + `${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    />


                ))}

            </div>

        </div>
    )
}

export default Row
