import React, { useEffect, useState } from 'react'
import axios from "../data/axios"  // This is using axios.create we've created instead of axios from nodemodules. (This includes the baseURL when making requests)

const Row = ({ title, fetchURL }) => {

    const [data, setData] = useState([]);

    // Pulling in data using fetchURL inside of useEffect
    useEffect(() => {
        const fetchData = async () => {

            const req = await axios.get(fetchURL);
            console.log(title, req)
        }

        fetchData()

    }, [])


    return (
        <div>

            <h2>{title}</h2>

            {/* container -> posters */}

        </div>
    )
}

export default Row
