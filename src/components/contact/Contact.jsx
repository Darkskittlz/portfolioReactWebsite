import "./contact.scss";
import { useState } from 'react';
import { GitHub, LinkedIn } from "@material-ui/icons";
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


export default function Contact() {
    const [message,setMessage] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setMessage(true)

    emailjs.sendForm(
        'service_wigaog9', 
        'template_f7p5sjq',
        form.current,
        'user_5ir65fREMKq7eQSSWuTYq',
        )
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
         }, (err) => {
            console.log('FAILED...', err.text);
         });
        e.target.reset();
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
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder="NAME" style = {{margin: "5px", padding: "5px"}}/>
                <input type="email" name="user_email" placeholder="EMAIL" style = {{padding: "5px"}}/>
                <textarea name="message" placeholder="MESSAGE" style = {{padding: "5px"}}/>
                <input id="send" type="submit" value="Send" />
                {message && <span>Thanks, I'll reply ASAP :)</span>}
            </form>
        </div>
    </div>
    )
}

