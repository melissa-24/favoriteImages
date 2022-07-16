import React from 'react'

const LoggedNav = () => {
    return (
        <>
        <a href="/java/dashboard">Dashboard</a>
        <a href="/java/nasa">Nasa</a>
        <a href="/java/tunes">Looney Tunes</a>
        <a href="/java/users">Other User Logs</a>
        {/* <a href="/java/logout">Logout</a> */}
        <a href="/java">Logout</a>
        </>
    )
}
export default LoggedNav