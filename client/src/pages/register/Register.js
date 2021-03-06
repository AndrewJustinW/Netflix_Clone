import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useRef, useState } from 'react';

const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailRef = useRef()
    const passRef = useRef()

    const handleStart = () => {

        setEmail(emailRef.current.value)
    }

    const handleFinish = () => {
        setPassword(passRef.current.value)
    }

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


                {!email
                    ?
                    <div className="input">
                        <input type="email" placeholder="Email address" ref={emailRef} />
                        <button className="register-button" fontSize="large" onClick={handleStart} >Get Started <ChevronRightIcon /></button>

                    </div>


                    :
                    <form className="input">
                        <input type="password" placeholder="Set Password" ref={passRef} />
                        <button className="register-button" fontSize="large" onClick={handleFinish} > Submit <ChevronRightIcon /></button>

                    </form>


                }


            </div>


        </div>

    )
}

export default Register
