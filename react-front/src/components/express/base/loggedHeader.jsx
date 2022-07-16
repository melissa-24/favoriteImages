import React from 'react'
import Nav from './nav'
import LoggedNav from './loggedNav'


const Header = () => {
    console.log('express loggedHeader.jsx')
    return (
        <>
        <h1>React Front-End w/ Express Backend</h1>
        <nav>
            <Nav />
            <LoggedNav />
        </nav>
        </>
    )
}

export default Header