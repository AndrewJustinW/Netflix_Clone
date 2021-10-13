import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useRef, useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailRef = useRef()
    const passRef = useRef()


    return (

        <div className="login">

            <div className="top">

                <img
                    className="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                />

            </div>

            <div className="container">

                <h1>Sign In</h1>

                <form className="inputs">

                    <div className="input">

                        <input type="email" placeholder="Email address" ref={emailRef} />

                    </div>

                    <div className="input">

                        <input type="password" placeholder="Password" ref={passRef} />

                    </div>

                    <button className="sign-in-button" fontSize="large" >Sign In</button>

                </form>


                <div className="options">
                    <div className="options-left">
                        <input type="checkbox" /> <span>Remember Me</span>
                    </div>

                    <div className="options-right">
                        <span>Need help?</span>
                    </div>
                </div>

                <div className="sign-up">
                    <span className="grey-text">New to Netflix? </span>
                    <span className="white-text">Sign up now.</span>
                </div>


            </div>


        </div>

    )
}

export default Login
