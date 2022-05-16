import React from "react";
import GenMenu from './menus/genMenu'

const LogReg = () => {

return (
    <>
        <header>
            <h1>Welcome to the React/Flask Favorite Images App</h1>
            <nav>
                <GenMenu />
            </nav>
        </header>
        <main>
            <div class='row'>
            <form action="http://127.0.0.1:5000/login/" method='post'>
                <section>
                    <label for="username">Username: </label>
                    <input type="text" name='username' />
                </section>
                <h2>OR</h2>
                <section>
                    <label for="email">Email: </label>
                    <input type="email" name="email" />
                </section>
                <section>
                    <label for="password">Password: </label>
                    <input type="password" name='password' />
                </section>
                <button>Login</button>
            </form>
            <form action="http://127.0.0.1:5000/register/" method='post'>
                <section>
                    <label for="firstName">First Name: </label>
                    <input type="text" name="firstName" />
                </section>
                <section>
                    <label for="lastName">Last Name: </label>
                    <input type="text" name='lastName' />
                </section>
                <section>
                    <label for="email">Email: </label>
                    <input type="email" name="email" />
                </section>
                <section>
                    <label for="username">Username: </label>
                    <input type="text" name="username" />
                </section>
                <section>
                    <label for="password">Password: </label>
                    <input type="password" name="password" />
                </section>
                <section>
                    <label for="confirm">Confirm Password: </label>
                    <input type="password" name="confirm" />
                </section>
                <button>Register and Login</button>
            </form>
            </div>
        </main>
    </>
);
};

export default LogReg;