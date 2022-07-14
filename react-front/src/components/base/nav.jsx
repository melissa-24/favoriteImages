import React from 'react'


const Nav = () => {
    return (
        <>
        <a href="https://dojo-ninja.com" target='_blank' rel='noreferrer'>Main Site</a>
        <a href="/">React Home</a>
        <a href="/django">Use Django Backend</a>
        <a href="/flask">Use Flask Backend</a>
        <a href="/java">Use Java Backend</a>
        <a href="http://localhost:3001/" target='_blank' rel='noreferrer'>Use Express/Node Backend</a>
        </>
    )
}

export default Nav