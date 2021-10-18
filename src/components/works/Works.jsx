import { useState } from "react";
import "./works.scss";





export default function Works() {
    const [currentSlide,setCurrentSlide] = useState(0)
    const data = [
        {
            id: 1, 
            icon: "./assets/github.png",
            title: "Github",
            img: "./assets/githubCard.png",
            description: "_____OPEN SOURCE CONTRIBUTIONS_____ DO-community/ cloud_haiku (Darkskittlz haiku #1630), SauravMukherjee4/Aec-Library-Website (Darkskittlz branch #280)  ", 
        },
        {
            id: 2, 
            icon: "assets/linkedIn.png",
            title: "LinkedIn",
            img: "assets/linkedInCover.png",
            description: "I am a MERN stack (MongoDB, Express, ReactJS, NodeJS) developer. Other skills include HTML, CSS, JAVASCRIPT, styled components, Ubuntu, EC2 Instance, Apache2, SSH, NPM."
        },
        {
            id: 3, 
            icon: "assets/dev2.png",
            title: "Free Code Camp",
            description: "____Front End Development Libraries___ Bootstrap (31/31), jQuery (18/18), SASS (9/9), React (20/47)... ",
            img: "assets/freeCodeCampProfilePic.png"
        },
    ];

    const handleClick = (way)=>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) 
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }
    
    return (
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d)=> (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p> {d.description} </p>
                                </div>
                            </div>
                            <div className="right">
                            <img src={d.img}></img>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img src="assets/leftArrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/leftArrow.png" className="arrow right" alt="" onClick={()=>handleClick()}/>
        </div>
    );
}
