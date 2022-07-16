import React from 'react'

const LoggedNav = () => {
    return (
        <>
        <a href="/flask/dashboard">Dashboard</a>
        <a href="/flask/nasa">Nasa</a>
        <a href="/flask/tunes">Looney Tunes</a>
        <a href="/flask/users">Other User Logs</a>
        {/* <a href="/flask/logout">Logout</a> */}
        <a href="/flask">Logout</a>
        </>
    )
}
export default LoggedNav