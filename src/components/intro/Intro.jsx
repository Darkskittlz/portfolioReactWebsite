import "./intro.scss";
import { useEffect, useRef } from "react";
import { init } from 'ityped'
import ParticleBackground from "../../ParticleBackground";



export default function Intro() {
    return (
        <div>
            <CenterTitle />
            <ParticleBackground />
        </div>
    );
}



function CenterTitle(){
    const textRef = useRef();

    useEffect(()=> {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["React Developer", "Software Engineer", "Designer"],
        });
    }, []);

    return (
        <div className="intro" id="intro">
        <div className="center">
            <div className="wrapper">
                <h2>Hi there, I'm </h2>
                <h1>Jeremy Neal</h1>
                <h3>Freelance <span ref={textRef}></span></h3>
            </div>
            <a href="#portfolio">
                <img src="assets/downWhiteArrow.png" alt="" />
            </a>
        </div>
    </div>
    );
}