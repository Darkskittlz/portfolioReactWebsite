import { GitHub } from "@material-ui/icons";
import { useState } from "react";
import "./portfolio.scss";



export default function Portfolio() {
    return (
        <div className="wrapperPortfolio">
            <Card
                img="https://github.com/Darkskittlz/portfolioReactWebsite/blob/main/public/assets/featuredMatias1n.png?raw=true"
                title="Musician Hub"
                description="HTML/SCSS/JS/NODEJS"
                path="https://www.matiassanes.com/"
            />
            <Card
                img= "https://github.com/Darkskittlz/portfolioReactWebsite/blob/main/public/assets/cardIMG2.png?raw=true"
                title="Link Tree"
                description="HTML/SCSS/JS/NODEJS"
                path="https://darkskittles.com/" 
            />
            <Card
                img= "https://lh3.googleusercontent.com/wkt3vwEIAS_6E_NawPIgG2SjZhVLUC8SHuarzCRDyu3HhXZpdDzoO9BNtynbR7jyxGokF86HFfO5qewNQtJ_zrnnyaCPUdA7qXvKpFMnm-I-krV9Yum16B4ct7tf45aDVQQveoaNV3tz_kanwNVLv8KOoZ-KAlhd2Lrw2ybOJyJw-mXLw2ARWcSfZ1ameDmzVZRaWnM_YK72twrEgDz3PaivNbP3n1tarqmZgCVlqoMhUFu0xPyFuOpbUSVoOFeNN8K9eGMbXIPRlwTr8jBA_3Wd-E4ce3JwdKITSqxIi9mRaF0drgEA0wnCNm6sBAGgpgrG_j8KI22AUwlMvzq1PORw896rcymkPEb9znro8n6HHtIa7RUS5jJfCywj6CHP5zQr45_pKr92a8RDymJ1KE713r_Z8j1Wg0liH7Tt0KnW_oLf-QSp7_TpfvifUqPLFknE7KBeC0xBe1FMaDR5a5GvIbbfot3P2gzjQPb3KcmMBi7hcOqLV2O9EBQfI_Uyl3anIdsmjqV7HufJaWuF0qDBiXS6sqmQkA2KKn9WVrM1iv2BYrtlErfvXMmSCXrk3iNZEREcYEx3Nr4ut4z_MPJSQMpqfZ7teI7f88YPuEod9sh_UBtWeMsFGhLYkVhmefZYTIeRIk89aYp_QjZTbB1c2H846bfviMejP_9du_kI2WIEG1fGr7KsKsMu6jGj5q7UmZ_hGqAcJJ0Rwl8kTUXj=w609-h510-no?authuser=0"
                title="React Notes"
                description="Material-UI, useEffect, Map Method"
                path="https://tender-brahmagupta-721442.netlify.app/" 
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
  


  