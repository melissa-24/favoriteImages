import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LoggedHeader from './base/loggedHeader'

const NASAKEY = '1aRkoVUWw3h7ZXmnd9OSWG2MtJUuQW2N6YYUgpat'
// console.log(NASAKEY)

const Nasa = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=${NASAKEY}`)
            // .then((res) => console.log(res.data))
            .then((res) => setData(res.data))
            .catch((err) => console.error(err))
    }, [])
    useEffect(() => {
        axios
            .post(`https://express-api.dojo-ninja.com/api/favorites`)
    })
    function button() {
        console.log("button clicked")
        var el = document.getElementById('img')
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
            <div className="nasa">
                <h3>Astronomy Photo of the Day</h3>
                <button id="button" onClick={button}>Click to see today's photo of the day</button>
                <div className="photo">
                    <img id='img' src={data.url} alt={data.title} />
                    <form action="">
                        <button>Save Img to Database</button>
                    </form>
                </div>
            </div>
        </main>
        </>
    )
}
export default Nasa