import { useRef, useState, useEffect } from "react"
import axios from "../../data/axios"  // This is using axios.create we've created instead of axios from nodemodules. (This includes the baseURL when making requests)
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material"
import RowItem from "../rowItem/RowItem"

const Row = ({ title, fetchURL, isLargeRow }) => {

    // Movies pulled from API for each row
    const [movies, setMovies] = useState([]);

    // This useState is mainly to check if we're at the first or last item in the container.
    const [slideNumber, setSlideNumber] = useState(0)

    // Check to see if one animation is finished before another begins.
    // const [animationFinished, setAnimationFinished] = useState(true)



    const rowRef = useRef()

    const handleClick = (direction) => {
        // setAnimationFinished(false)

        // The Element.getBoundingClientRect() method returns a DOMRect object providing information
        //   about the size of an element and its position relative to the viewport.

        // Storing the x axis position of the container element and subtracting the width (50px) of the arrows (in pixels)
        let distance = rowRef.current.getBoundingClientRect().x - 50
        // console.log(rowRef.current.getBoundingClientRect().width)

        // If we're at the beginning of the list don't allow for the slider to move.
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1)
            rowRef.current.style.transform = `translateX(${301 + distance}px)`  //301px  = 18.8125em (listItem's width + margin-right = 18.8125em)

        }

        // If we're at the ending of the list don't allow for the slider to move.
        // slideNumber > 2 accounts for there only being 8 visible and 2 left off screen
        if (direction === "right" && slideNumber < (movies.length - 6)) {
            setSlideNumber(slideNumber + 1)
            rowRef.current.style.transform = `translateX(${-301 + distance}px)`  //301px  = 18.8125em (listItem's width + margin-right = 18.8125em)

        }




    }


    // Pulling in data using fetchURL inside of useEffect
    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get(fetchURL);  // fetchURL is pulled in as a prop from app.js. App.js is using api endpoints stored in requests.js
            setMovies(req.data.results)
            // console.log(movies)
            return req
        }

        // console.log(movies)
        fetchData()
    }, [fetchURL, movies])

    return (
        <div className="row">

            <h2 className="row-title">{title}</h2>

            <div className="wrapper">

                <ArrowBackIosOutlined
                    className="slider-arrow slider-left"
                    onClick={() => handleClick("left")}
                    style={{ display: slideNumber === 0 && "none" }}
                />

                <div className="container" ref={rowRef}>

                    {movies.map((movie) => (

                        <RowItem movie={movie} isLargeRow={isLargeRow} key={movie.id} fetchURL={fetchURL} />

                    ))}


                </div>

                <ArrowForwardIosOutlined
                    className="slider-arrow slider-right"
                    onClick={() => handleClick("right")}
                    style={{ display: slideNumber >= (movies.length - 6) && "none" }}
                />

            </div>

        </div>
    )
}

export default Row
