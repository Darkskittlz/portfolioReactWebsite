import "./contact.scss";
import { useState } from 'react';
import { GitHub, LinkedIn } from "@material-ui/icons";

export default function Contact() {
    const [message,setMessage] = useState(false)

    const handleSubmit=(e) => {
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
        <div className="left">
            <img src="https://mlgrfz8k3lti.i.optimole.com/PAwVk04--QvxNdsW/w:auto/h:auto/q:auto/https://bartnowak.com/new/storage/2021/03/contact.svg" alt="" />
        </div>
        <div className="right">
            <div className="linkContainer">
                <div className="linkLeft">
                    <a href = {"https://www.linkedin.com/in/jeremydev/"}>
                        <LinkedIn className="icon"/>
                    </a>
                </div>
                <div className="linkRight">
                    <a href = {"https://www.github.com/Darkskittlz/"}>
                        <GitHub className="icon"/>
                    </a>
                </div>
            </div>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Send</button>
                {message && <span>Thanks, I'll reply ASAP :)</span>}
            </form>
        </div>
    </div>
    )
}

