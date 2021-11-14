import "./intro.scss";
import { useEffect, useRef } from "react";
import { init } from 'ityped'
import ParticleBackground from "../../ParticleBackground";
import React, { Component } from 'react';
import Clock from "react-live-clock";
import moment from 'moment';



export default function Intro() {
    return (
        <div>
            <Time />
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
            </div>
        </div>
    );
}

class Time extends Component {
    constructor(props){
        super(props)


        this.state={
            todaysDate: false
        }
    }

        toggleSwitch = () => {
            this.setState({
                todaysDate: !this.state.todaysDate
            })
        }
  render(){
    return(
      <div className="App">

        <div className="toggleDate">
            {this.state.todaysDate 
            ? moment.tz("2021-10-27", "US/Atlantic")
            .format("MMMM Do YYYY") : ''}
        </div>
        <div className="wrapper2">
            <div className="time">
                <Clock format={'h:mm a'}
                ticking={true}
            />
            </div>
        </div>
      </div>
    )
  }
}
