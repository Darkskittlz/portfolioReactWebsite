import "./portfolioList.scss";


export default function PortfolioList({ id, title, active, setSelected}) {
    return (
        <li className={active ? "portfolioList active" : "portfolioList"} 
        // The function above states if PortfolioList is active it wil be "portfolioLIst + 
        // active", meaning it will have a blacked out box surrounding it. But if not it 
        // will be portfolioList by itself = no box.
        onClick={() => setSelected(id)}>
            {title}
        </li>
    );
}
