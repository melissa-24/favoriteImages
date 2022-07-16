import React from 'react'
import Header from './django/base/header'

const Express = () => {
    console.log("I am on django.jsx")
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <a href="/django/dashboard">Dashboard</a>
            </main>
        </>
    )
}

export default Express