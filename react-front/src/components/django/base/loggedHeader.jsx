import React from 'react'
import Nav from './nav'
import LoggedNav from './loggedNav'


const Header = () => {
    return (
        <>
        <h1>React Front-End w/ Django Backend</h1>
        <nav>
            <Nav />
            <LoggedNav />
        </nav>
        </>
    )
}

export default Header