import React, { useEffect, useState } from 'react'
import axios from "../data/axios"  // This is using axios.create we've created instead of axios from nodemodules. (This includes the baseURL when making requests)

const Row = ({ title, fetchURL }) => {

    const [movies, setMovies] = useState([]);

    // Pulling in data using fetchURL inside of useEffect
    useEffect(() => {
        const fetchData = async () => {

            const req = await axios.get(fetchURL);
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

                    <img src={movie.poster_path} alt={movie.name} />

                ))}

            </div>

        </div>
    )
}

export default Row
