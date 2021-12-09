import { useState } from "react";
import "./works.scss";
import React from 'react';



export default function Works() {
    const [currentSlide,setCurrentSlide] = useState(0)
    const data = [
        {
            id: 1, 
            icon: "assets/yinYang.png",
            title: "About Me",
            img: "assets/aboutMe4.jpg",
            description: `I am a highly motivated programmer familiar with the MERN/PERN stack. As a 
             full-stack developer I am comfortable with designing, coding, and deploying dynamic web applications 
             and static websites. I am familiar with testing the endpoints of REST apis and querying data from 
             remote/local databases. My favorite front-end framework is ReactJS, which I used to create  
             DarkMeowProductions.com, which utilizes the EmailJS API, ParticleJS API, and styled-components. 
             I am currently learning Solidity and Web3 technologies for the creation and integration 
             of smart contracts with dApps and Dexs. `,
        },
        {
            id: 2, 
            icon: "assets/dev2.png",
            title: "Dapp University Blockchain Bootcamp",
            img: "assets/blockchainBootcampIMG.jpg",
            description: `I am currently enrolled in a blockchain bootcamp centered around programming
            in solidity and implementing smart contract technology in decentralized Apps. The capstone project
            involves creating a DEX with a new ERC20-Token, and hosting it on the blockchain test network.`
        },
        {
            id: 3, 
            icon: "assets/github.png",
            title: "Github",
            img: "assets/cardIMG.png",
            description: `I am a part of the Grammarhub and Project ANT organizations on Github. I  
            routinely take part in hackathons such as hacktoberfest and look forward to continuing to 
            my open source contributions as I progress as a developer. `,
        },
        {
            id: 4, 
            icon: "assets/linkedIn.png",
            title: "LinkedIn",
            img: "assets/linkedInCover2.png",
            description: `I am a MERN stack (MongoDB, Express, ReactJS, NodeJS) developer. Other skills 
            include HTML, CSS, JAVASCRIPT, styled components, Ubuntu, EC2 Instance, Apache2, SSH, NPM.`
        },
    ];

    const handleClick = (way)=>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 3) 
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }
    
    return (
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d)=> (
                    <div className="container">
                        <div className="item">
                            <div className="right">
                                <img src={d.img} alt=""></img>
                            </div>
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p> {d.description} </p>
                                </div>
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

