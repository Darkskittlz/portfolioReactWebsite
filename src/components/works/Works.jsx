import { useState } from "react";
import "./works.scss";





export default function Works() {
    const [currentSlide,setCurrentSlide] = useState(0)
    const data = [
        {
            id: 1, 
            icon: "./assets/github.png",
            title: "Github",
            img: "./assets/githubPreview.png",
            description: "Follow this website on Github for open-source contributions. I have several repositories listed on my profile. Most of them are static sites but I plan on building more react web applications."
        },
        {
            id: 2, 
            icon: "assets/linkedIn.png",
            title: "LinkedIn",
            img: "assets/linkedInProfileCoverBro2.png",
            description: "I have developed my proficiency with the MERN stack (MongoDB, Express, React, NodeJS), as well as HTML/CSS/Javascript over the past 15 months. After returning to the US from Japan in May, I have taught myself how to program using CodeAcademy, FreeCodeCamp, StackOverflow, LeetCode and YouTube tutorials."
        },
        {
            id: 3, 
            icon: "assets/dev2.png",
            title: "Free Code Camp",
            description: "Follow along with me as I continue my journey as a developer. I'll be updating my freeCodeCamp profile as I earn certificates along the way. I'm currently working my way through the front-end libraries module. ",
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
