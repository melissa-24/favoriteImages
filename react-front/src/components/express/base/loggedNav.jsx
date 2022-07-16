import React from 'react'


const LoggedNav = () => {
    console.log('express loggedNav.jsx')
    return (
        <>
        <a href="/express/dashboard">Dashboard</a>
        <a href="/express/nasa">Nasa</a>
        <a href="/express/tunes">Looney Tunes</a>
        <a href="/express/users">Other User Logs</a>
        {/* <a href="/express/logout">Logout</a> */}
        <a href="/express">Logout</a>
    </>
    )
}
export default LoggedNav