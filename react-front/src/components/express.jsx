import React from 'react'
import Header from './express/base/header'

const Express = () => {
    console.log("I am on express.jsx")
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <a href="/express/dashboard">Dashboard</a>
            </main>
        </>
    )
}

export default Express