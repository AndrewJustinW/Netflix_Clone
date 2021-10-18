// Object of API ENDPOINTS
import requests from "../../data/requests"
import React from 'react'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Row from "../../components/row/Row"

const Home = () => {
    return (
        <div className="home">
            <Navbar />

            <Featured />
            <Row title="Trending Now" fetchURL={requests.fetchTrending} />
            <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
            <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
            <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} />
            <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
        </div>
    )
}

export default Home
