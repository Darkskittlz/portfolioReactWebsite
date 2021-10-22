export function featuredPortfolio() {
    return (
        <div className="wrapper">
          <Card 
          img="https://www.matiassanes.com/img/homeIMG.jpeg"
          title="Recipe"
          description="Matias Website Project"
          />
          <Card 
          img="https://www.matiassanes.com/img/homeIMG.jpeg"
          title="Recipe"
          description="Matias Website Project"
          />
          <Card 
          img="https://www.matiassanes.com/img/homeIMG.jpeg"
          title="Recipe"
          description="Matias Website Project"
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
          <a href="https://www.matiassanes.com/"><button className="card__btn">Live Site</button></a>
        </div>
      )
    }
 

























    //     {
//         id: 1, 
//         title: "MatiasSanes.com",
//         img: "assets/matiasWebsiteHome.png",
//         visit: "https://www.matiassanes.com/"
//     },
//     {
//         id: 2, 
//         title: "BandsInTown Embed",
//         img: "assets/featuredMatias2.png",
//         visit: "https://www.matiassanes.com/"
//     },
//     {
//         id: 3, 
//         title: "Spotify Embed",
//         img: "assets/featuredMatias3.png",
//         visit: "https://www.matiassanes.com/"
//     },
//     {
//         id: 4, 
//         title: "Google Notes Embed",
//         img: "assets/matiasWebsite.png",
//         visit: "https://www.matiassanes.com/"
//     },
// ];

export const projectsPortfolio = [
    {
        id: 1, 
        title: "Counter",
        img: "assets/counterFunction.png",
    },
    {
        id: 2, 
        title: "Snake",
        img: "assets/snake.png",
    },
    {
        id: 3, 
        title: "Mole Unearther",
        img: "assets/moleUnearther.png",
    },
    {
        id: 4, 
        title: "onHover Transitions",
        img: "assets/onHover.png"
    },
];
