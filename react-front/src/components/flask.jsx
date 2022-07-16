import React from 'react'
import Header from './flask/base/header'

const Express = () => {
    console.log("I am on flask.jsx")
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <a href="/flask/dashboard">Dashboard</a>
            </main>
        </>
    )
}

export default Express