import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Header from './express/base/header'

const Express = (props) => {
    // console.log("I am on express.jsx")
    // let history = useHistory()
    // const [ token, setToken] = useState(undefined)

    // useEffect(() => {
    //     const localToken = window.localStorage.getItem("token")
    //     console.log(localToken)
    // })


    // const handleLogin = (e) => {
    //     e.preventDefault();
    //     setIsLoading(true);
    //     axios
    //         .post("https://express-api.dojo-ninja.com/api/auth/login", credentials)
    //         .then((res) => {
    //             setTimeout(() => {
    //             setIsLoading(false);
    //             setError("");
    //             localStorage.setItem("token", res.data.payload);
    //             props.history.push("/dashboard");
    //             }, 300);
    //         })
    //         .catch((err) => {
    //             setIsLoading(false);
    //             console.log("ml: login.js: handlelogin:", err);
    //             setError("Invalid Credentials");
    //         });
    //         setCredentials({});
    // };
    // const handleChange = (e) => {
    //     setCredentials({
    //         ...credentials,
    //         [e.target.name]: e.target.value,
    //     });
    // };

    // const handleLogTest = (e) => {
    //     e.preventDefault();
    //     // setIsLoading(true);
    //     console.log('submit sent')

    // }


    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <p>Welcome to the Express side of the React Application.  Just like the other sections and applications in this project this is the same application but in this case we are using a Express/Node backend with the React front-end. Register or login below to get started, and be sure to visit the other versions</p>
                <div className="row">
                    <form>
                        <section>
                            <label htmlFor="email">Email:</label>
                            <input type="text" name="email"  />
                        </section>
                        <section>
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" />
                        </section>
                        <button>Login</button>
                    </form>
                    <form action="">
                        <section>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" name='firstName' />
                        </section>
                        <section>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" name='lastName' />
                        </section>
                        <section>
                            <label htmlFor="email">Email:</label>
                            <input type="text" name='email' />
                        </section>
                        <section>
                            <label htmlFor="username">Username:</label>
                            <input type="text" name='username' />
                        </section>
                        <section>
                            <label htmlFor="password">Password:</label>
                            <input type="password" name='password' />
                        </section>
                        <section>
                            <label htmlFor="confirm">Confirm Password</label>
                            <input type="password" name='confirm' />
                        </section>
                        <button>Register and Login</button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Express