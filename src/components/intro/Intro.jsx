import "./intro.scss";
import { useEffect, useRef } from "react";
import { init } from 'ityped'

// import img from './assets/mainProPic.jpg'


export default function Intro() {
    const textRef = useRef();

    useEffect(()=> {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Full-Stack Developer", "Software Engineer", "Designer"],
        });
    }, []);
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src= "./assets/mainProPic.jpg" alt=""/>                    
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm </h2>
                    <h1>Jeremy Neal</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/downArrowIMG.png" alt="" />
                </a>
            </div>
        </div>
    );
}
