import React, {useEffect, useState} from 'react'
import MainMenu from './menus/mainMenu'
import axios from 'axios'
import Images from './images'

const Dashboard = () => {

    const [isActive, setActive] = useState("false");
    const Toggle = () => {
      setActive(!isActive); 
     };

    const [imgs, setImgs] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:5000/api/session/")
            .then(res => {
                console.log("api/dash results: ", res);
            })
    })

    useEffect(() => {
        axios
            .get ("https://flask-only.dojo-ninja.com/api/imgs/")
                .then(res => {
                    console.log("results: ", res.data.imgs);
                    setImgs(res.data.imgs);
                })
                .catch(error => {
                    console.log("The Force was Not With you!!", error);
                });
    },[])

    console.log(imgs);


    return (
        <>
            <header>
                <h1>Welcome</h1>
                <nav>
                    <MainMenu />
                </nav>
            </header>
            <h1>Welcome to the Dashboard</h1>
            <main>
            <button id='image' onClick={Toggle}>Show you Images</button>
            <div className='row'>
                <div className={isActive ? "images" : "api"}>
                        {imgs.map(img => {
                            return (<Images 
                                imgUrl = {img.imgUrl}
                                name ={img.name}
                            />);
                        })}
                </div>
            </div>
            </main>
        </>
    )
}
export default Dashboard;