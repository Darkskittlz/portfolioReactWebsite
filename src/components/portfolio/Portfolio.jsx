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
                    img="https://github.com/Darkskittlz/portfolioReactWebsite/blob/main/public/assets/featuredMatias1.png?raw=true"
                    title="Musician Hub"
                    description="HTML/SCSS/JS/NODEJS"
                    path="https://www.matiassanes.com/"
                />
                <Card
                    img= "https://lh3.googleusercontent.com/6ZqQuUPptF63Wyss7DyZ7DWiNJFTA7uJy-E9fdS_kruMN9rhpmkxyE_1VuN868j_iLbHTy-KhmI4zL27mqDnB_TosO1Q9CEwQR0Q5nxxiF6kNdMf6jPHJ8-ljJJQdU2vIdWs6GBwKGmXfvurCYNa2m6FpRVARZnqblbF-dnd12VHxbhCifLaB2sjHbVz5hGttDzPtJ97ozuvjcH0Hip9ezbrQ14nLAdxZNZbRu3sggUpmqrDKL8XPdn2CelinWz6V3OOERZ1-R48vmWXuwC9sjezWclqjPJBVsK-etvgSLYbQJQUGRkZeTYsKckBLWJ28xwb_fdDf2Vy2qPVI4v86TKXNgVJ0bDA7LG8qmi2REWZm5j9o76nFiMK2A_4O6ETPMq2MyrCvg7o_FZuMedY5SIZMzeiymCAF8TVNtmkP04-3l0z5s4th3p9CFyVpZu_NZxV7qGXkX9VeeHKjQR3Ju37-uPCAWTilZbd_9IXhbNTGsjYvPqm4dml3xn1rLJmG6q-nvvKtCNc2Mib07n3sFSJIwekyBXOlMJ3IF0ZmzDMCgzDHfTw_Zbltxdd9lzYckTH7cT3ev2rKvhzM8Nftg3U8SO0KTOnEiKpDMAFPgDJ2LRQqWyqpnY2cwlKj2QjB3zC8EswbExqIsxB9TaCCo64XEHjpHKpkXDofXNQ6nSwyEz9NSRrRKqzaG-05ZEIa6GDX9G1FjFsm4PUDA3MV9c1WQ=w797-h527-no?authuser=0" 
                    title="Old Portfolio"
                    description="HTML/SCSS/JS/NODEJS"
                    path="https://darkskittlz.github.io/oldPortfolio/index.html" 
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
    <div className="cardContainer">
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
    </div>
    )
  }
  


  