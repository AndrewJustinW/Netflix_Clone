import { ArrowDropDown, Notifications, Search } from '@mui/icons-material'
import React, { useState } from 'react'

const Navbar = () => {

    // Check if the page has been scrolled
    const [isScrolled, setIsScrolled] = useState(false);

    // When page has been scrolled setIsScrolled to true
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null);
    }


    return (
        // If isScrolled state is true then add scrolled class. If not then just use default navbar class/css
        <nav className={isScrolled ? "navbar scrolled" : "navbar"}>

            <div className="nav-container">

                <div className="nav-left">

                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />

                    <span>Home</span>
                    <span>TV Shows</span>
                    <span>Movies</span>
                    <span>New & Popular</span>
                    <span>My List</span>

                </div>

                <div className="nav-right">

                    <Search className="nav-icon" />

                    <span>DVD</span>

                    <Notifications className="nav-icon" />

                    <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />

                    <div className="profile">

                        <ArrowDropDown className="nav-icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>

                </div>

            </div>

        </nav>
    )
}

export default Navbar
