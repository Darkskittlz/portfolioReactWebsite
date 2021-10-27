import { GitHub } from "@material-ui/icons";
import { useState } from "react";
import "./portfolio.scss";



export default function Portfolio() {
    return (
        <div className="wrapperPortfolio">
            <Card
                img="https://github.com/Darkskittlz/portfolioReactWebsite/blob/main/public/assets/matiasDemo.png?raw=true"
                title="Matias Sanes"
                description="HTML/SCSS/JS/NODEJS"
                path="https://www.matiassanes.com/"
            />
            <Card
                img= "https://github.com/Darkskittlz/portfolioReactWebsite/blob/main/public/assets/darkskittlzDemo2.png?raw=true"
                title="Link Tree"
                description="HTML/SCSS/JS/NODEJS"
                path="https://darkskittles.com/" 
            />
        </div>
    );
  }
  
  function Card(props){
    return (
    <div className="card">
        <div className="card__body">
          <img src={props.img} class="card__image" />
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.description}</p>
        </div>
        <a 
            href={props.path}
            target="_blank"
            rel="noopener noreferrer"
        >
            <button
                className="card__btn"
                path={props.path}
            > Live Site
            </button>
        </a>
      </div>
    )
  }
  


  