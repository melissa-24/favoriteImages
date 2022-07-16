import React from 'react'
import Nav from './nav'


const Header = () => {
    console.log('express header.jsx')
    return (
        <>
        <h1>React Front-End w/ Express/Node Backend</h1>
        <nav>
            <Nav />
        </nav>
        </>
    )
}

export default Header