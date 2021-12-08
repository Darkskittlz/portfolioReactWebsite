import React from 'react';
import { Email, GitHub, LinkedIn } from "@material-ui/icons"
import "./topbar.scss"


export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"><img src="./assets/catLogo.png" alt="logo"></img></a>
                    <div className="itemContainer">
                        <a href = {"https://www.linkedin.com/in/jeremydev/"}>
                            <LinkedIn className="icon"/>
                            <span>JeremyDev</span>
                        </a>
                    </div>
                    <div className="itemContainer">
                    <a href = {"https://www.github.com/Darkskittlz/"}>
                        <GitHub className="icon"/>
                        <span>Darkskittlz</span>
                    </a>
                    </div>
                    <div className="itemContainer">
                        <Email className="icon" />
                        <span>Darkskiiittles@gmail.com</span>
                    </div>
                </div>
                <h1>DarkMeow Productions</h1>
                <div className="right">
                    <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}