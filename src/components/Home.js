import React, { useState } from 'react';
import './Home.css';

const Home = () => {

    const [mode, setMode] = useState("light")

    return (

        <div className={mode === "light" ? "container-light-mode" : "container-dark-mode"}>


            <div className="container">
                <div className="heading">

                    <h1 className={mode === "light" ? "h1-light-mode" : "h1-dark-mode"} >Overreacted</h1>
                    <button className={mode === "light" ? "button-light-mode" : "button-dark-mode"}
                     onClick={() => { setMode("dark") }}>toggle</button>
                </div>
                <br></br>
                <br></br>

                <h2 className={mode === "light" ? "h2-light-mode" : "h2-dark-mode"}>The WET Codbase</h2>
                <div className={mode === "light" ? "h5-light-mode " : "h5-dark-mode"}>
                    <h5>sunday 4th, 2020 11 min read</h5>
                    <h5>Come waste your time with me</h5>
                </div>
                <br></br>

                <h2 className={mode === "light" ? "h2-light-mode" : "h2-dark-mode"}>Goodby, Clean Code</h2>
                <div className={mode === "light" ? "h5-light-mode " : "h5-dark-mode"}>
                    <h5>Friday 22nd, 2019 5 min read</h5>
                    <h5>Let clean code guide you. then let it go.</h5>
                </div>
                <br></br>

                <h2 className={mode === "light" ? "h2-light-mode" : "h2-dark-mode"}>My Decade In Review</h2>
                <div className={mode === "light" ? "h5-light-mode " : "h5-dark-mode"}>
                    <h5>Saturday 11th, 2018 5 min read</h5>
                    <h5>A personal reflection.</h5>
                </div>
                <br></br>

                <h2 className={mode === "light" ? "h2-light-mode" : "h2-dark-mode"}>What Are The React Team Principles</h2>
                <h5 className={mode === "light" ? "h5-light-mode " : "h5-dark-mode"}>Thursday 4th, 2015 5 min read</h5>

            </div>
        </div>

    );
}

export default Home;