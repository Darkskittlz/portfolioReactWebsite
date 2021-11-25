import "./portfolio.scss";
import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    &::-webkit-scrollbar{
    display: none;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 88%;
    gap: 0.5rem;

    .card__body {
        height: 60%;
        justify-content: center;
    }
    
    img {
        height: 100%;
    }

    p {
        display: none;
    }

    button {
        height: 50%;
    }

  }
`

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
            <Container>
                <Card
                    img= "https://github.com/Darkskittlz/portfolioReactWebsite/blob/main/public/assets/darkmeowshop.png?raw=true"
                    title="ECommerce Art Shop"
                    description="React, CommerceJS API, Styled-Components"
                    path="https://darkmeowshop.com" 
                />
                <Card
                    img= "https://github.com/Darkskittlz/portfolioReactWebsite/blob/main/public/assets/darkmeowshop.png?raw=true"
                    title="Blockchain Decentralized App"
                    description=""
                    path="https://darkmeowshop.com" 
                />
                <Card
                    img="https://github.com/Darkskittlz/portfolioReactWebsite/blob/main/public/assets/featuredMatias1.png?raw=true"
                    title="Musician Hub"
                    description="HTML/SCSS/JS/NODEJS"
                    path="https://www.matiassanes.com/"
                />
                <Card
                    img= "https://github.com/Darkskittlz/portfolioReactWebsite/blob/main/public/assets/cardIMG2.png?raw=true" 
                    title="Link Tree"
                    description="HTML/SCSS/JS/NODEJS"
                    path="https://darkskittlz.github.io/bootstrap-playground/" 
                />
                <Card
                    img= "https://github.com/Darkskittlz/portfolioReactWebsite/blob/main/public/assets/2reactNotes.png?raw=true"
                    title="React Notes"
                    description="Material-UI, useEffect, Map Method"
                    path="https://tender-brahmagupta-721442.netlify.app/" 
                />
            </Container>
        </div>
    );
  }
  
  function Card(props){
    return (
    <div className="card">
        <div className="card__body">
          <img src={props.img} alt='featuredIMG' className="card__image" />
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
  


  