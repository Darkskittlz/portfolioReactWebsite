import "./testimonials.scss";

export default function Testimonials() {
    const data = [
        {
            id: 1, 
            name: "Devin Feheley",
            title: "Cosplayer",
            img: "assets/elfGirl.jpg",
            icon: "assets/cosplayIcon.png",
            desc: "As a cosplayer who is determined to make it as a social media influencer I knew I needed a hub of communication between me and my fans. DarkMeow Productions helped me make an E-commerce platform to sell the art and clothes I market in my Twitch streams. ",
        },
        {
            id: 2, 
            name: "Matias Sanes",
            title: "Musician",
            img: "assets/matiasIMG.jpeg",
            icon: "https://static.thenounproject.com/png/17849-200.png",
            desc: "The process of creating my first website was definitely a daunting task that I didn't really know how to approach at first. I didn't want to go through Wix or any other major website creator because it was a lot of work on my end that I didn't have the time to invest. When I stumbled across DarkMeow Productions I was delightfully surprised at how easy it was to communicate with the software developer.",
            featured: true,
        },
        {
            id: 3, 
            name: "Haikyu",
            title: "?",
            img: "https://i.pinimg.com/236x/1f/ad/79/1fad790df43b91b3c847fcf0e8aca38d.jpg",
            icon: "https://animeandgameembroidery.com/wp-content/uploads/2020/11/karasuno.png",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa animi, consequuntur iste veniam iure qui natus magni, velit aut doloribus quaerat pariatur amet, dolores harum veritatis enim distinctio architecto laboriosam!",
        },
    ];
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((d) => (
                    <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/curved-down-right-arrow-1752105-1492654.png" className="left" alt="" />
                        <img className="user" src={d.img} alt="" />
                        <img className="right" src={d.icon} alt="" />
                    </div>
                    <div className="center">
                        <h3>{d.desc}</h3>
                    </div>
                    <div className="bottom">
                        <h3>{d.name} </h3>
                        {/* <h4>{d.title} </h4> */}
                    </div>
                </div>
              ))}
            </div>
        </div>
    )
}
