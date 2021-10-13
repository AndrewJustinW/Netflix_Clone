import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from 'react';

const Register = () => {

    const [email, setEmail] = useState("")

    return (

        <div className="register">

            <div className="top">

                <img
                    className="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                />

                <button className="login-button">Sign In</button>

            </div>

            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>

                <p> Ready to watch? Enter your email to create or restart your membership.</p>

                <div className="input">
                    <input type="email" placeholder="Email address" />
                    <button className="register-button">Get Started <ChevronRightIcon fontSize="large" /></button>

                </div>

            </div>


        </div>

    )
}

export default Register
