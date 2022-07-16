import React from 'react'
import Header from './base/header'
import Footer from './base/footer'

const Main = () => {
    console.log("I am on main.jsx")
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <h1>Favorite Images</h1>
                <p>Please chose which backend you wish to use.  You can create a user on all of them or just one.  Please feel free to checkout the other applications that are also a part of this project</p>
            </main>
            <footer>
                <Footer />
            </footer>

        </>
    )
}

export default Main