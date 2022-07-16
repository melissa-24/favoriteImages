import React from 'react'
import Header from './java/base/header'

const Express = () => {
    console.log("I am on java.jsx")
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <a href="/java/dashboard">Dashboard</a>
            </main>
        </>
    )
}

export default Express