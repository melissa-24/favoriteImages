import React from 'react'
import GenMenu from './genMenu'


const MainMenu = () => {
    return (
        <>  
            <GenMenu />
            <a href='/dashboard/'>Dashboard</a>
            <a href='/images/nasa/'>Nasa</a>
            <a href="/images/looneyTunes">Looney Tunes</a>
            <a href="/users/">Other User Logs</a>
            <a href="http://127.0.0.1:5000/logout/">Logout</a>
        </>
    )
};
export default MainMenu