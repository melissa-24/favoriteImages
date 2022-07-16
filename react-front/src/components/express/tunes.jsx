import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LoggedHeader from './base/loggedHeader'

const tunes = 'https://dojo.navyladyveteran.com/characters/'
console.log(tunes)
const Tunes = () => {
    const [tuneData, setTuneData] = useState([])
    useEffect(() => {
        axios
            .get(`https://dojo.navyladyveteran.com/characters/`)
            // .then((res) => console.log( res.data))
            .then((res) => setTuneData(res.data))
            .catch((err) => console.error(err))
    }, [])

    function getTunes() {
        console.log("button clicked")
        var el = document.getElementById('tune')
        // el.style.display = 'flex'
        if (el.style.display === 'flex') {
            el.style.display = 'none'
        } else {
            el.style.display = 'flex'
        }
        }

    return (
        <>
        <header>
            <LoggedHeader />
        </header>
        <main>
            <button id='button' onClick={getTunes}>Get The Looney Tunes</button>
            <div id="tune" className="api">
                {console.log(tuneData)}
                {tuneData.map((tune) => (
                    <div>
                        <h2>{tune.name}</h2>
                        <h3>{tune.birthDay}</h3>
                        <img src={tune.img} alt={tune.name} />
                        <form action="">
                            <button>Save Image to Database</button>
                        </form>
                    </div>
                ))}
            </div>
        </main>
        </>
    )
}
export default Tunes