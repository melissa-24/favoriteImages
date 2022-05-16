import React from 'react'
import MainMenu from './menus/mainMenu'

const Dashboard = () => {
    return (
        <>
            <header>
                <h1>Welcome</h1>
                <nav>
                    <MainMenu />
                </nav>
            </header>
            <h1>Welcome to the Dashboard</h1>
        </>
    )
}
export default Dashboard;