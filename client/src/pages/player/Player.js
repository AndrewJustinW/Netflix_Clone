import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
const Player = () => {
    return (
        <div className="player">

            <div className="top">

                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                />

                <div className="top-right">

                    <ArrowBackOutlinedIcon />
                    <span>Home</span>

                </div>

            </div>

            <iframe className="trailer" src="https://www.youtube-nocookie.com/embed/vw61gCe2oqI?controls=1&autoplay=1&modestbranding=1&loop=1&showinfo=0&playlist=vw61gCe2oqI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

        </div>
    )
}

export default Player
