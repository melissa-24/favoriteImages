import React from 'react'

const LoggedNav = () => {
    return (
        <>
        <a href="/django/dashboard">Dashboard</a>
        <a href="/django/nasa">Nasa</a>
        <a href="/django/tunes">Looney Tunes</a>
        <a href="/django/users">Other User Logs</a>
        {/* <a href="/django/logout">Logout</a> */}
        <a href="/django">Logout</a>
        </>
    )
}
export default LoggedNav