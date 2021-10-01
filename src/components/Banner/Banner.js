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

    return (
        <header className="banner">

            {/* title */}
            {/* div with 2 buttons */}
            {/* description of featured movie */}


        </header>
    )
}

export default Banner
